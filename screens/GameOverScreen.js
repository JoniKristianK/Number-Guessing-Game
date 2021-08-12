import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.screen}>
			<Text>Game Over!</Text>
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
});

export default GameOverScreen;
