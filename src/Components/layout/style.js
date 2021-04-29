
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
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
        overflowY : 'auto'
    }
});

export default useStyle;