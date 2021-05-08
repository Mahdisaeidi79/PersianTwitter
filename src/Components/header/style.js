import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    header:{
        display :'flex',
        padding : '1.5rem',
        backgroundColor : 'white'
    },
    headerTitle:{
        fontSize :'1.3rem',
        fontWeight :'bold',
        marginRight :'0.5rem'
    }
}));

export default useStyles;