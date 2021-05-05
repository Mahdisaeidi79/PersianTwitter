import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width : '23%',
        padding :'1.7rem 1.5rem'
    },
    Tweetest:{
        padding : '0.8rem 0'
    },
    profileTweetests :{
        width : 'max-content',
       alignItems :'flex-start',
       marginRight :'1rem'
    },
    profile:{
        width : 'max-content',
        marginLeft : '0.8rem'
    },
    profileName: {
        width :'100%',
        direction : "ltr"
    },
    profileId: {
        color : 'rgba(0,0,0,0.5)',
        flex :1,
        fontSize : '0.77rem',
        direction :"ltr"
    },
    bestOfTweet:{
        background :'#f5f8fa',
        marginTop :'3rem',
        borderRadius : '2.5rem',
        padding : '13px 24px',
    },
    titleBest:{
        color: '#5ea9dd !important',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        paddingBottom:'10%'
    }
});

export default useStyles;