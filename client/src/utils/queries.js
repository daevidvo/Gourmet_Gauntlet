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

export const GET_GAME = gql`
    query getGame($userId: ID!) {
        getGame(userId: $userId) {
            _id
            userStage
            userId
            userHealth
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

