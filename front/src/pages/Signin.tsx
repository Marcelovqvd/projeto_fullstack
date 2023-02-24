import { Grid } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { Footer } from "../components/footer/Footer";
import { Form } from "../components/form/Form";
import { ImageFront } from "../components/ImageFront/ImageFront";

interface DataPost {
	
}

export function SignIn() {

	const response = data => axios.post("url", data)
		.then(() => {
			console.log("Certo");
		})
		.catch(() => {
			console.log("Errado");
		});

	return (
		<>
			<Grid display={"flex"}>
				<ImageFront />
				<Form />
			</Grid>
			<Footer />
		</>
	);
}