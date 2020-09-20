import React from "react";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from "../components/forms/index";
import defaultStyles from "../config/styles";
import Screen from "./../components/Screen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
});

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
	return (
		<Screen style={defaultStyles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormField maxLength={225} name='title' placeholder='Title' />
				<FormField
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
				/>
				<Picker items={categories} name='category' placeholder='Category' />
				<FormField
					maxLength={225}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<SubmitButton title='Post' />
			</AppForm>
		</Screen>
	);
};

export default ListingEditScreen;
