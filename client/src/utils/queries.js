import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
        }
    }
`;

export const GET_PLAYER_STATS = gql`
    query getPlayerStats{
        getPlayerStats {
            matchesPlayed
            gameWins
            gameLosses
        }
    }
`