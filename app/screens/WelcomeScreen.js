import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => {
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.btnsContainer}>
				<AppButton title='Login' onPress={() => console.log("Hello")} />
				<AppButton
					title='Register'
					color='secondary'
					onPress={() => console.log("Hello")}
				/>
			</View>
			<View style={styles.registerBtn}></View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	btnsContainer: {
		padding: 20,
		width: "100%",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	tagline: {
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20,
	},
});

export default WelcomeScreen;
