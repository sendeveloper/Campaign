import React from 'react';

class SubMenuItem extends React.Component {
	render() {
		return (
			<li className={(this.props.active ? 'active' : '')}>
				<a href={this.props.data.url}>
					{this.props.data.name}
				</a>
			</li>
		)
	}
}

export default SubMenuItem;