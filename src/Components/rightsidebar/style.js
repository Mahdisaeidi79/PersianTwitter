import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        width: '16.4%'
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
        fontSize: 45
    },
    titleHashtag: {
        fontSize : '1.1rem !important',
        fontWeight : '600',
        margin : '3rem 1rem 1.5rem 0'

    },
    parentHashTag:{
        width : '100%',
        padding : '0.5rem',
        marginBottom : '0.5rem'
    },
    hashTag:{
        marginRight : '0.8rem'
    }
});

export default useStyle; 