const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Game {
        _id: ID!
        userStage: Number!
        userId: ID!
        userHealth: Number!
        userCards: [GameCards]
    }

    type GameCards {
        _id: ID!
        cardName: String!
        cardHealth: Number!
        cardAttack: Number!
        cardImage: String!
        cardType: String!
    }

    type Card {
        _id: ID!
        cardName: String!
        cardHealth: Number!
        cardAttack: Number!
        cardImage: String!
        cardType: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getAllCards: [Card]
        getGame(userId: ID!): Game
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        setGameProgress(userId: ID!, userStage: Number, userHealth: Number, userCards: [GameCards]): Game
    }
    `;

module.exports = typeDefs;


