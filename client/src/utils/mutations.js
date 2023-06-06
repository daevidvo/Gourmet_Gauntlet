import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SET_GAME_STAGE = gql`
  mutation setGameStage(
    $userStage: Number
  ) {
    setGameStage(
      userStage: $userStage
    ) {
      userStage
    }
  }
`;

export const SET_GAME_HEALTH = gql`
  mutation setGameHealth(
    $userHealth: Number
  ) {
    setGameHealth(
      userHealth: $userHealth
    ) {
      userHealth
    }
  }
`;

export const SET_GAME_CARDS = gql`
  mutation setGameCards(
    $userCards: [GameCards]
  ) {
    setGameCards(
      userCards: $userCards
    ) {
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
