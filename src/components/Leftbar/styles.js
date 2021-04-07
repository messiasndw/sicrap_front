import { makeStyles,useTheme  } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    drawer: {
        // top: "65px",
        width: "20vw",
        backgroundColor: "#BBC4C2",
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: 'red',
        },
        // backgroundImage: "linear-gradient(to bottom right, #189AB4, #05445E)",
        // "&:hover": {
        //     backgroundColor: "blue"
        // },
        borderRight: "0px",
        overflowY: "unset"
    },
    rootButton: {
        width: "100%",
        marginTop: "20px",
        fontSize: "1.1rem",
        transition: "0.3s",
        "&:hover": {
            // backgroundColor: "none",
            fontSize: "1.5rem"
        },

        "&:focus": {
            backgroundColor: "none",
            fontSize: "1.5rem"
        },
    },
    rootIcon: {
        marginRight: "10px"
    },
    rootActiveButton: {
        backgroundColor: "red"
    }
}));

export default useStyles