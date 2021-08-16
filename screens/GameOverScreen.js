import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<Text>Game Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/success.png')}
					resizeMode='cover'
				/>
			</View>
			<Text>Number of rounds: {roundsNumber}</Text>
			<Text>Number was: {userNumber}</Text>
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
});

export default GameOverScreen;
