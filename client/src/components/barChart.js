import { Bar } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { GET_PLAYER_STATS } from '../utils/queries';


export const BarChart = ({ chartData }) => {

const { loading, data } = useQuery(GET_PLAYER_STATS);
if (loading) {
    return <div>Loading...</div>;
}

if (!data) {
    return <div>Nothing to show</div>;
}

const playerData = data?.getPlayerStats || [];

  const playerChartData = {
  labels: ['Wins', 'Losses', 'Games Played'],
  datasets: [{
    label: 'Player Stats',
    data: [playerData.gameWins, playerData.gameLosses, playerData.matchesPlayed],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 1
  }]
};

    return (
        <div className="chart-container">
            <Bar data={playerChartData} options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Player Stats'
                    }
                }
            }} />   
        </div>
    )
}