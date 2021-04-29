import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root : {
        backgroundColor : '#e6e6e6',
        flex :1,
        overflowY : 'auto'
    },
    divider:{
        backgroundColor : '#7EBAFF',
        filter : 'opacity(0.2)'
    },
    newTweet :{
        padding : '1.5rem',
        backgroundColor : 'white',
        flex :1
    },
    tweetList:{
        padding : '1.5rem',
        backgroundColor : 'white',
        flex :1,
        marginTop : '0.5rem'
    },
    input:{
        flex :1,
        marginRight : '1rem',
        padding :'0.7rem 0.7rem 0 0',
        border : '0.5px solid #edf5ff ',
        "&:focus":{
            outline : 0
        },
        resize : 'none',
        overflow :'hidden',
        fontSize :'1.1rem'
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
     newTweetimg:{
        border : '0.1px solid #3337 !important',
        padding : '0.5rem !important',
        marginLeft : '1rem'
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

export default useStyle;