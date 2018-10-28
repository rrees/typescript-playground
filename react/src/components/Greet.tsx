import * as React from "react";

export interface GreetProps {name: string};

export class Greet extends React.Component<GreetProps, {}> {
	render() {
		return <p>Hello {this.props.name}</p>;
	}
}