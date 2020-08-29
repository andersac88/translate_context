import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	renderSumbit = (value) => {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	};

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{(value) => this.renderSumbit(value)}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return (
			<ColorContext.Consumer>
				{(color) => this.renderButton(color)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
