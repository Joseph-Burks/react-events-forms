import React from 'react';
import CardContainer from './CardContainer';
import Form from './AddForm';

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

	render() {
		return (
			<div style={{textAlign: 'center'}}>
                <h1>Premeir League Players</h1>
				<CardContainer players={this.state.players} />
				<Form />
			</div>
		);
	}
}
