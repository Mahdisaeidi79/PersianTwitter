import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to left top, #FFFFFF, #6DD5FA, #2980B9)',
        height: '100vh',
        position: 'relative'
    },
    container: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10% auto',
        right: '30%',
        left: '30%',
        width : '35%',
        background: 'rgba(255,255,255,0.06)',
        width: '35%',
        backdropFilter: 'blur(50rem)',
        boxShadow: '1.25rem 1.25rem 3.75rem -0.375rem rgba(0,0,0,0.2)',
        borderRadius: '1.5rem',
        [theme.breakpoints.between('500', '1200')]: {
            width: '55%',
            margin: '18% auto',
            right: '22%',
            left: '25%'
        },
        [theme.breakpoints.between('365', '500')]: {
            width: '65%',
            margin: '26% auto',
            right: '17%',
            left: '50%'
        },
        [theme.breakpoints.between('xs', '365')]: {
            width: '70%',
            margin: '26% auto',
            right: '15%',
            left: '50%'
        }
        
    },
    tab: {
        fontFamily: 'Shabnam !important',
    },
    headerText: {
        margin: '2rem auto 0 auto',
        color: '#fafafa',
        fontFamily: 'Shabnam ',
        fontSize: '1.5rem'
    },
    Login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%'
    },
    Register: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%'
    },
    input: {
        background: 'transparent',
        border: 'none',
        marginTop: '2rem',
        borderLeft: '1px solid rgba(255, 255, 255,0.3)',
        BorderTop: '1px solid rgba(255, 255, 255,0.3)',
        textAlign: 'center',
        backdropFilter: 'blur(50rem)',
        boxShadow: '0.25rem 0.25rem 3.75rem rgba(0,0,0,0.2)',
        fontFamily: 'Shabnam',
        padding: '1.5%',
        borderRadius: '1.5rem',
        textShadow: '0.125rem 0.125rem 0.25rem rgba(0,0,0,0.2)',
        "&:hover": {
            backgroundColor: 'rgba(255,255,255,0.1)',
            boxShadow: '0.25rem 0.25rem 3.75rem 0.5rem rgba(0,0,0,0.2)'
        },
        "&:focus": {
            outline: '0'
        },
        color: '#fff'
    }
}));

export default useStyle;