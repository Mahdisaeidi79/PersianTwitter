import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        padding: '1.5rem',
        backgroundColor: 'white'
    },
    headerTitle: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        marginRight: '0.5rem'
    },
    menuItem: {
        fontFamily: 'Shabnam',
        fontWeight: '800',
        '&:focus': {
            backgroundColor: '#1976D2',
            color: '#FFFFFF',
            borderRadius: '0.2rem'
        }
    }
}));

export default useStyles;