import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        width: '16.4%',
        position :'static'
    },
    textLogo: {
        padding: '1.5rem 1rem !important',
        color: '#5ea9dd !important',
        fontSize: '1.3rem',
        fontWeight: 'bold'
    },
    logo: {
        color: '#5ea9dd',
        marginRight: '1rem',
        fontSize: 45,
       flex:1
    },
    titleHashtag: {
        fontSize : '1.2rem !important',
        fontWeight : '600',
        margin : '3rem 1rem 1.5rem 0'

    },
    parentHashTag:{
        width : '100%',
        padding : '0.6rem',
        marginBottom : '0.8rem',
        "&:hover":{
            backgroundColor:"#5ea9dd",
            color:"white",
            width : '95%',
            borderRadius:'0.7rem',
            paddingRight:'1.5rem'
        }
    },
    hashTag:{
        marginRight : '0.8rem',
        fontSize : '1.3rem',
       
    }
});

export default useStyle; 