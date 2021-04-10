import { makeStyles,useTheme  } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({

    // LEFTBAR
    drawer: {
        width: "20vw",
        backgroundColor: "#E2DED0",
        borderRight: "0px",
        overflowY: "unset"
    },

    // MENUS
    rootButton: {
        // width: "100%",
        fontSize: "1.1rem",
        transition: "0.1s",
        color:"#4E4F50",
        "&:hover": {
            backgroundColor: "#4E4F50",
            color:"#E2DED0",
            fontSize: "1.5rem"
        },
        "&:focus": {
            backgroundColor: "#4E4F50",
            color:"#E2DED0",
            fontSize: "1.5rem"
        },
    },
    rootIcon: {
        marginRight: "10px",
        [theme.breakpoints.down('sm')]: {
            marginRight:"0px",
            fontSize:"1.8rem"
        },
        
    },
    boxRoot: {
        textAlign:"center",
        margin: "auto",
        marginTop: "100px",
        width:"100%"
    },

    //PROFILE CARD
    titleContent:{
        [theme.breakpoints.down('xs')]: {
            padding:"15px 0px 0px 0px",
        },
    },
    profileTitle:{
        fontSize:"1rem",
        color:"#4E4F50",
        [theme.breakpoints.down('sm')]: {
            fontSize:"0.8rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.6rem",
        },
    },
    profileSubTitle:{
        color:"#4E4F50",
        fontSize:"0.9rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"0.6rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:"0.5rem",
        },
    },
    large: {
        margin: "auto",
        width: "150px",
        height: "150px",
        [theme.breakpoints.down('sm')]: {
            width:"100px",
            height:"100px"
        },
        [theme.breakpoints.down('xs')]: {
            width:"55px",
            height:"55px"
        },
    },
    cardMediaRoot: {

    },
    cardRoot:{
        backgroundColor:"unset",
        boxShadow:"unset"
    }
}));

export default useStyles