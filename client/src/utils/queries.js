import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
        }
    }
`;

export const GET_ALL_CARDS = gql`
    query getAllCards {
        getAllCards {
            _id
            cardName
            cardHealth
            cardAttack
            cardImage   
            cardType
        }
    }
`;

export const GET_STAGE = gql`
    query getStage($userId: ID!) {
        getStage(userId: $userId) {
            userStage
            userId
        }
    }
`;

export const GET_HEALTH = gql`
    query getHealth($userId: ID!) {
        getHealth(userId: $userId) {
            userId
            userHealth
        }
    }
`;

export const GET_PLAYER_CARDS = gql`
    query getPlayerCards($userId: ID!) {
        getPlayerCards(userId: $userId) {
            userId
            userCards {
                _id
                cardName
                cardHealth
                cardAttack
                cardImage
                cardType
            }
        }
    }
`;