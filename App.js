import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView, Animated, Button } from 'react-native';

export default class App extends React.Component {
	constructor(){
		super();
		this.animated=new Animated.Value(0);
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
						<Animated.Text
							style={styles.thatsIt}
							>That's it for today folks! See you tomorrow!</Animated.Text>
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
	thatsIt: {
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
