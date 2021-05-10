import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root : {
        backgroundColor : '#e6e6e6'
    },
    header:{
        display :'flex',
        padding : '1.5rem',
        backgroundColor : 'white'
    },
    headerTitle:{
        fontSize :'1.5rem',
        fontWeight :'bold',
        marginRight :'0.5rem'
    },
    divider:{
        backgroundColor : '#7EBAFF',
        filter : 'opacity(0.2)'
    },
    newTweet :{
        padding : '1.5rem',
        backgroundColor : 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    tweetList:{
        padding : '1.5rem',
        backgroundColor : 'white',
        display: 'flex',
        marginTop : '0.5rem',
        flexDirection: 'column',
        "&:hover":{
            backgroundColor :'#fafafa'
        }
    },
    input:{
        flex :1,
        marginRight : '1rem',
        padding :'0.7rem 0.7rem 0 0',
        border : '1.5px solid #edf5ff ',
        "&:focus":{
            outline : 0
        },
        resize : 'none',
        overflow :'hidden',
        fontSize :'1.1rem',
        borderRadius :'0.5rem',
        fontFamily : 'Shabnam'
    },
    newTweetBtn:{
        backgroundColor : '#5ea9dd',
        color:'white',
        minWidth : '7.5rem',
        height : '3rem',
        borderRadius : '2.5rem',
        fontSize : '1.1rem',
        fontFamily : 'shabnam',
        fontWeight :"bold",
        "&:hover" :{
            backgroundColor : '#84bfe8'
        }
    },
    retweetBtn:{
        border : '0.1px solid #3337 !important',
        padding : '0.55rem !important',
        marginLeft : '1rem',
        "&:hover":{
            backgroundColor:'#5EA9DD'
        }
     },
    likeBtn:{
        border : '0.1px solid #3337 !important',
        padding : '0.55rem !important',
        marginLeft : '1rem',
        "&:hover":{
            color:'red'
        }
     },
     tweetListName:{
         fontWeight : 600,
         marginTop : '1.2rem'
     },
     tweetListId:{
         marginRight : '0.8rem',
         color : 'rgba(0,0,0,0.5)',
         marginTop : '1.2rem'
     },
     tweetText:{
         marginTop : '2rem',
         width : '95% !important',
         overflowWrap : 'anywhere !important'
     },
     tweetLikeCount:{
         fontSize :'0.8rem',
         color : 'rgba(0,0,0,0.5)',
         marginLeft :'1rem',
         marginTop :'1rem'
     }
});

export default useStyles;