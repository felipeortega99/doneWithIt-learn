import React, { useState } from "react";

import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import { TextInput } from "react-native-gesture-handler";
import { Text } from "react-native";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];

export default function App() {
	const [category, setCategory] = useState(categories[0]);

	return (
		<Screen>
			<AppPicker
				selectedItem={category}
				onSelectItem={(item) => setCategory(item)}
				items={categories}
				icon='apps'
				placeholder='Category'
			/>
			<AppTextInput icon='email' placeholder='Email' />
		</Screen>
	);
}
