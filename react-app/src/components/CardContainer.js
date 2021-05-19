import React from 'react';
import PlayerCard from './PlayerCard';
import { Card } from 'semantic-ui-react';

const CardContainer = ({ players }) => {
	return (
		<Card.Group>
			≈
			{players.map(player => {
				return <PlayerCard key={player.id} player={player}/>;
			})}
		</Card.Group>
	);
};

export default CardContainer;
