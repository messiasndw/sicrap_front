import { makeStyles, useTheme } from '@material-ui/core/styles';
import { inputColors } from '../../layouts/Auth/config'

const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: "#E2DED0",
        color: "#4E4F50",
        "&:hover": {
            color: "#E2DED0",
            backgroundColor: "#4E4F50",
        }
    },
}));

export default useStyles

// primary:"#4E4F50",
//     secondary:"blue",
//     hover:"#4E4F50",
//     focused:"#E2DED0"