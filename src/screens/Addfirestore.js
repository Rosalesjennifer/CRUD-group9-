import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { collection, addDoc } from "firebase/firestore";
import { database } from "../config/firestore";

export default function Addfirestore() {
	const navigation = useNavigation();
	const [newItem, setNewItem] = useState({
		itemID: "",
		toDo: "",
		description: "",
		due_date: "",
		status: "",
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	const onSubmit = async () => {
		try {
			await addDoc(collection(database, "cruds"), newItem);
			navigation.navigate("Listfirestore");
		} catch (error) {
			alert("Error Adding Data");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.textHeader}>Add Data</Text>
				<TextInput
					multiline={false}
					onChangeText={(text) => setNewItem({ ...newItem, itemID: text })}
					placeholder="ToDo ID"
					style={styles.textInput}
				></TextInput>
				<TextInput
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, toDo: text })}
					placeholder="ToDo Name"
					style={styles.textInput}
				></TextInput>
				<TextInput
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, description: text })}
					placeholder="Description"
					style={styles.textInput}
				></TextInput>
				<TextInput
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, due_date: text })}
					placeholder="Due Date (YYYY-MM-DD)"
					style={styles.textInput}
				></TextInput>
				<TextInput
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, status: text })}
					placeholder="Status"
					style={styles.textInput}
				></TextInput>
				<Button title="Submit" onPress={onSubmit} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f4f4f8", // Soft light gray background
	},
	innerContainer: {
		padding: 20,
		margin: 20,
		borderRadius: 15,
		alignItems: "center",
		backgroundColor: "#ffffff", // White container
		shadowOffset: { width: 2, height: 2 },
		elevation: 10,
		shadowColor: "#000000", // Black shadow for a cleaner look
		shadowOpacity: 0.1,
	},
	textHeader: {
		fontWeight: "bold",
		fontSize: 22, // Larger font size for the header
		color: "#333333", // Dark gray for readability
		fontFamily: "Arial", // Font for a modern look
		marginBottom: 15,
	},
	textInput: {
		width: "90%",
		padding: 10,
		marginVertical: 8,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#007BFF", // Blue border for input fields
		backgroundColor: "#f9f9f9", // Light gray input background
		fontSize: 16, // Slightly larger font for input
		color: "#333333", // Dark text color
		fontFamily: "Arial", // Font style for inputs
	},
});
