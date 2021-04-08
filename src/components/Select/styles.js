import { makeStyles,useTheme  } from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    underline: {
        "&:before": {
            borderBottom:`2px solid ${inputColors.primary}`
        }, 
        "&:after": {
            borderBottom: `2px solid ${inputColors.focused}`,
        }, 
    },
}));

export default useStyles