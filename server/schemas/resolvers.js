const { Cards, Game, GameCards, User } = require("../models");
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
    getAllCards: async () => {
      return await Cards.find({});
    },
    getGame: async (parent, { userId }) => {
      return await Game.findOne({ userId: userId }).populate("userCards");
    },
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
    setGameProgress: async (
      parent,
      { userStage, userHealth, userCards }, context
    ) => {
      const game = await Game.findOneAndUpdate(
        { userId: context.user._id },
        { userStage: userStage, userHealth: userHealth, userCards: userCards },
        { new: true }
      ).populate("userCards");

      if (!game) {
        return await Game.create({
          userId: context.user._id,
          userStage: userStage,
          userHealth: userHealth,
          userCards: userCards,
        });
      }

      return game;
    },
  },
};

module.exports = resolvers;
