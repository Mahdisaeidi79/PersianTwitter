
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
    root : {
        display : 'flex',
        height : '100vh',
        width : '100%',
        overflow : 'hidden'
    },
    divider:{
        height:'100% !important',
        width : '1px !important',
        backgroundColor : '#7EBAFF !important',
        filter :'opacity(0.5)'
    },
    container:{
        width :'60.6%',
        overflowY : 'auto',
        [theme.breakpoints.down("sm")] :{
            width: '80%'
        },
        [theme.breakpoints.down("xs")] :{
            width: '70%'
        },
        [theme.breakpoints.between('xs','426')] :{
            width :'100%'
        }
    },
    waitParent:{
        display :'flex',
        flexDirection : 'column',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        width : '100%',
        height:'100vh'
      }
}));

export default useStyles;