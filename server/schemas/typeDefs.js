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
        userStage: Int!
        userId: ID!
        userHealth: Int!
        userCards: [GameCards]
    }

    type GameCards {
        _id: ID!
        cardName: String!
        cardHealth: Int!
        cardAttack: Int!
        cardImage: String!
        cardType: String!
    }

    type Card {
        _id: ID!
        cardName: String!
        cardHealth: Int!
        cardAttack: Int!
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
        setGameProgress(userId: ID!, userStage: Int, userHealth: Int, userCards: [GameCards]): Game
    }
    `;

module.exports = typeDefs;


