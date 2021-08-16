import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					// fadeDuration={300}
					style={styles.image}
					source={require('../assets/success.png')}
					resizeMode='cover'
				/>
			</View>
			<Text style={styles.text}>Number of rounds: {roundsNumber}</Text>
			<Text style={styles.text}>Number was: {userNumber}</Text>
			<Button title='NEW GAME' onPress={onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 2,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	text: {
		marginBottom: 5,
	},
});

export default GameOverScreen;
