import React from 'react';
import CardContainer from './CardContainer';
import AddForm from './AddForm';

export default class MainContainer extends React.Component {
	state = {
		players: [],
	};

	componentDidMount() {
		fetch('http://localhost:3000/players')
			.then(res => res.json())
			.then(players => {
				this.setState({ players });
			});
	}

	addNewPlayer = player => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(player),
		};

		fetch('http://localhost:3000/players', options)
			.then(res => res.json())
			.then(newPlayer => {
				let players = [...this.state.players, newPlayer];
				this.setState({ players });
			});
	};

	addLike = player => {
		let newLikes = player.likes + 1;
		let options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
            body: JSON.stringify({likes: newLikes})
		};

        fetch(`http://localhost:3000/players/${player.id}`, options)
        .then(res => res.json())
        .then(updatedPlayer => {
            let players = this.state.players.map(oldPlayer => {
                if(oldPlayer.id === updatedPlayer.id){
                    return updatedPlayer
                } else {
                    return oldPlayer
                }
            })
            this.setState({ players })
        })
	};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Premeir League Players</h1>
				<CardContainer players={this.state.players} addLike={this.addLike} />
				<AddForm addNewPlayer={this.addNewPlayer} />
			</div>
		);
	}
}
