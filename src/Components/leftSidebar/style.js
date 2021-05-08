import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '23%',
        padding: '1.7rem 1.5rem',
        [theme.breakpoints.down("sm")]: {
            width: '35%'
        },
        [theme.breakpoints.between('xs', '426')]: {
            width: '100%',
            padding: '0.5rem 0.2rem'
        }
    },
    Tweetest: {
        padding: '0.8rem 0',
        [theme.breakpoints.between('xs', '426')]: {
            width: '100%',
            padding: '0.5rem 0'
        }
    },
    profileTweetests: {
        width: 'max-content',
        alignItems: 'flex-start',
        marginRight: '1rem',
    },
    profile: {
        width: 'max-content',
        marginLeft: '0.8rem',
        [theme.breakpoints.between('xs', '426')]: {
            marginLeft: '0.1rem',
        }
    },
    profileImg: {
        width: '3rem',
        height: '2.81rem',
        borderRadius: '50%',
       

    },
    profileName: {
        width: '100%',
        direction: "ltr"
    },
    profileId: {
        color: 'rgba(0,0,0,0.5)',
        flex: 1,
        fontSize: '0.77rem',
        direction: "ltr "
    },
    profileIdTweetest: {
        direction: "rtl",
        color: 'rgba(0,0,0,0.5)',
        flex: 1,
        fontSize: '0.77rem',
        [theme.breakpoints.between('xs', '376')]: {
            fontSize: '0.7rem'
        }
    },
    profileNameTweetest: {
        direction: "rtl",
        fontWeight: 'bold',
        [theme.breakpoints.between('xs', '376')]: {
            fontSize: '0.9rem'
        }
    },
    bestOfTweet: {
        background: '#f5f8fa',
        marginTop: '3rem',
        borderRadius: '2.5rem',
        padding: '13px 24px',
        [theme.breakpoints.between('xs', '426')]: {
            width: '100% !important'
        }
    },
    titleBest: {
        color: '#5ea9dd !important',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        paddingBottom: '10%'
    },
    divider: {
        margin: '0 -5% 0 -5%',
        [theme.breakpoints.between('xs', '426')]: {
            margin: '0 -1.5rem 0 1rem'
        }
    },
    profileImgTweetest: {
        width: '2.81rem',
        height: '2.81rem',
        borderRadius: '50%',
        [theme.breakpoints.between('xs', '376')]: {
            width: '2.2rem',
            height: '2.2rem',
        }
    }
}));

export default useStyles;