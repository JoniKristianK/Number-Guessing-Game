import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import MainButton from '../components/MainButton';

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
			<View style={styles.resultContainer}>
				<Text style={styles.text}>
					Number of rounds: {roundsNumber}
				</Text>
				<Text style={styles.text}>Number was: {userNumber}</Text>
			</View>
			<MainButton onPress={onRestart}> NEW GAME</MainButton>
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
		width: Dimensions.get('window').width * 0.8,
		height: Dimensions.get('window').width * 0.8,
		borderRadius: (Dimensions.get('window').width * 0.8) / 2,
		borderWidth: 2,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height / 20, // 5% of the device height
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		marginVertical: Dimensions.get('window').height / 60,
		alignItems: 'center',
	},
	text: {
		marginBottom: 5,
	},
});

export default GameOverScreen;
