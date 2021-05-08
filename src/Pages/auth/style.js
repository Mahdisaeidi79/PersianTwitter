import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root : {
        background : 'linear-gradient(to left top, #FFFFFF, #6DD5FA, #2980B9)',
        height : '100vh'
    },
    container:{
        position : 'absolute',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        margin:'10rem auto',
        right:'30rem',
        left : '30rem',
        background:'rgba(255,255,255,0.06)',
        width : '35%',
        backdropFilter : 'blur(50rem)',
        boxShadow : '20px 20px 40px -6px rgba(0,0,0,0.2)',
        borderRadius : '1.5rem'
    },
    tab:{
        fontFamily : 'Shabnam !important',
    },
    headerText:{
        margin : '2rem auto 0rem auto',
        color : '#fafafa',
        fontFamily : 'Shabnam ',
        fontSize : '1.5rem'
    },
    Login:{
        display :'flex',
        flexDirection : 'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        top:0,
        left:0,
        width : '100%'
    },
    Register:{
        display :'flex',
        flexDirection : 'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        top:0,
        left:0,
        width : '100%'
    },
    input:{
        background : 'transparent',
        border : 'none',
        marginTop : '2rem',
        borderLeft : '1px solid rgba(255, 255, 255,0.3)',
        BorderTop : '1px solid rgba(255, 255, 255,0.3)',
        textAlign : 'center',
        backdropFilter : 'blur(50rem)',
        boxShadow : '4px 4px 60px rgba(0,0,0,0.2)',
        fontFamily : 'Shabnam',
        padding : '0.5rem',
        borderRadius : '1.5rem',
        textShadow : '2px 2px 4px rgba(0,0,0,0.2)',
        "&:hover":{
            backgroundColor : 'rgba(255,255,255,0.1)',
            boxShadow : '4px 4px 60px 8px rgba(0,0,0,0.2)'
        },
        "&:focus":{
            outline : '0'
        },
        color:'#fff'
    }
});

export default useStyle;