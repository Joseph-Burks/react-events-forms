import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

export default class AddForm extends React.Component {
	handleAdd = () => {};

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
				<Form>
					<Form.Field>
						<Input label='Name' />
					</Form.Field>
					<Form.Field>
						<Input label='Position' />
					</Form.Field>
					<Form.Field>
						<Input label='Team Name' />
					</Form.Field>
					<Form.Field>
						<Input label='Image URL' />
					</Form.Field>
					<Button primary onClick={this.handleAdd}>
						Add
					</Button>
				</Form>
			</Segment>
		);
	}
}
