import { Grid } from '@mui/material';
import Footer from '../footer/Footer';
import Form from '../form/Form';

export default function Signin() {
    return (
        <>
        <Grid display={'flex'}>
            <img src="../../../assets/image1.svg" alt="image" />               
            <Form />            
        </Grid>
        <Footer />     
        </>
    )
}