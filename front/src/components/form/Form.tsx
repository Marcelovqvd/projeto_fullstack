import { Box, Button, Grid } from "@mui/material";

export function Form() {
	return (
		<form action="">
			<Box sx={{ flexGrow: 1 }}>
				<Grid 
					container 
					columns={{ xs: 4, md: 12 }}
                        
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<img src="../../../assets/logo.svg" alt="logo" />
				</Grid>
				<Grid container 
					columns={{ xs: 4, md: 12 }}
                        
					direction="row"
					justifyContent="center"
					alignItems="center">
					<Button variant="contained" disableElevation>Logar</Button>
				</Grid>
				<Grid container 
					columns={{ xs: 4, md: 12 }}
                        
					direction="row"
					justifyContent="center"
					alignItems="center">
					<Button variant="contained" disableElevation>Criar conta</Button>
				</Grid>
			</Box>
		</form>
       
	);
}