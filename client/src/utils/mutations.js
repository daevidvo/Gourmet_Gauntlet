import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
        signUp(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SET_GAME_PROGRESS = gql`
    mutation setGameProgress($userId: ID!, $userStage: Number, $userHealth: Number, $userCards: [GameCards]) {
        setGameProgress(userId: $userId, userStage: $userStage, userHealth: $userHealth, userCards: $userCards){
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


