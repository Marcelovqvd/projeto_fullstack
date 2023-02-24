import { Grid } from "@mui/material";
import * as React from "react";
import { Footer } from "../components/footer/Footer";
import { Form } from "../components/form/Form";
import { ImageFront } from "../components/ImageFront/ImageFront";

export function SignUp() {
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