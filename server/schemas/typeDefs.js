const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
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

    input inputGameCards {
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

    type PlayerStats {
        _id: ID!
        gameWins: Int!
        gameLosses: Int!
        matchesPlayed: Int!
        userId: ID!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getPlayerStats: PlayerStats
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        updateUser(username: String!, email: String!): Auth
    }
    `;

module.exports = typeDefs;


