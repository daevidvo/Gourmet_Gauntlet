const { User, Stats } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ _id: context.user._id })
          .select("-__v -password");

        return data;
      }

      throw new AuthenticationError("Not logged in");
    },
    getPlayerStats: async (parent, args, context) => {
      if (context.user){
        const playerStats = await Stats.findOne({ userId: context.user._id })
        .select("-__v");

        return playerStats;
      }
      throw new AuthenticationError("No Stats Found for User");      
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      console.log("hi");
      const user = await User.findOne({ email });

      console.log(user);

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
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
