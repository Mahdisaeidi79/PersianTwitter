import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root : {
        display : 'flex',
        height : '100vh',
        width : '100%',
    },
    middle :{
        flex :1
    },
    leftSide :{
        width : '23%'
    },
    divider:{
        height:'100% !important',
        width : '1px !important',
        backgroundColor : '#7EBAFF !important',
        filter :'opacity(0.5)'

    }
});

export default useStyle;