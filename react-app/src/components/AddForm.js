import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

export default class AddForm extends React.Component {
	state = {
		name: '',
		position: '',
		team: '',
		image: '',
		likes: 0,
	};

	handleNameChange = e => {
		this.setState({ name: e.target.value });
	};

	handlePositionChange = e => {
		this.setState({ position: e.target.value });
	};

	handleTeamChange = e => {
		this.setState({ team: e.target.value });
	};

	handleImageChange = e => {
		this.setState({ image: e.target.value });
	};

	handleAdd = (e) => {
		let player = {...this.state}
		this.props.addNewPlayer(player)
		e.target.reset()
	};

	render() {
		return (
			<Segment
				style={{
					marginTop: '10vh',
					marginLeft: '30vw',
					marginRight: '30vw',
					paddingLeft: '10vw',
					paddingRight: '10vw',
					textAlign: 'center',
				}}
			>
				<h1>Add Player</h1>
				<Form onSubmit={this.handleAdd} >
					<Form.Field>
						<Input label='Name' onChange={this.handleNameChange} />
					</Form.Field>
					<Form.Field>
						<Input label='Position' onChange={this.handlePositionChange} />
					</Form.Field>
					<Form.Field>
						<Input label='Team Name' onChange={this.handleTeamChange} />
					</Form.Field>
					<Form.Field>
						<Input label='Image URL' onChange={this.handleImageChange} />
					</Form.Field>
					<Button primary >Add</Button>
				</Form>
			</Segment>
		);
	}
}
