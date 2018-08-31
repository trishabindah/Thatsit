import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView, Animated, Button } from 'react-native';

class AnimatedText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: '',
			delay: 1000 / this.props.txt.length,
			i: 0
		};
	}
	componentDidMount() {
		let int = setInterval(() => {
			this.setState({
				currentText: this.props.txt.substring(0, this.state.i),
				i: this.state.i + 1
			});
			if (this.state.i > this.props.txt.length) {
				clearInterval(int);
			}
		}, this.state.delay);
	}

	render() {
		return (
			<Text style={this.props.style}>{this.state.currentText}</Text>
		);
	}
}

export default class App extends React.Component {
	constructor() {
		super();
		this.animated = new Animated.Value(0);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.redScreen}>
					<Image
						source={require('./assets/logo.png')}
						style={{ width: 200, height: 200 }}
					/>
				</View>
				<View style={styles.whiteScreen}>
					<View style={styles.readyForm}>
						<AnimatedText
							style={styles.AreYouReady}
							txt={'That\'s it for today folks... See you tomorrow!'}
						/>
					</View>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	redScreen: {
		flex: 1,
		backgroundColor: '#D43939',
		alignItems: 'center',
		width: '100%'
	},
	whiteScreen: {
		flex: 1.5,
		backgroundColor: '#D43939',
		width: '100%'
	},
	AreYouReady: {
		fontSize: 30,
		color: '#FFF',
		alignItems: 'center',
		textAlign: 'center',
		padding: 3
	},
	animationView: {
		width: 100,
		height: 100,
		backgroundColor: '#D43939'
	},
});
