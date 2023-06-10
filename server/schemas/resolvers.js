const { User, Stats } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return data;
      }

      throw new AuthenticationError("Not logged in");
    },
    getPlayerStats: async (parent, args, context) => {
      if (context.user) {
        const playerStats = await Stats.findOne({
          userId: context.user._id,
        }).select("-__v");

        return playerStats;
      }
      throw new AuthenticationError("No Stats Found for User");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    signUp: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      await Stats.create({ userId: user._id });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { username, email }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { username, email },
          { new: true }
        ).select("-__v -password");

        const token = signToken(user);

        return {token, user}
      }
    },
  },
};

module.exports = resolvers;
