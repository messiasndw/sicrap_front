import { makeStyles,useTheme  } from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    
    underline:{
        "&:before": {
            borderBottom:`2px solid ${inputColors.primary}`
        }, 
        "&:after": {
            borderBottom:`2px solid ${inputColors.focused}`
        }, 
    },
    labelRoot:{
        color:inputColors.primary,
        "&.Mui-focused": {
            color: inputColors.focused,
        }, 
    },
    IconButtonRoot:{
        padding:"0px"
    },
    iconRoot:{
        height:"0.7em"
    },
    inputRoot:{
        "&.MuiInput-formControl":{
            marginTop:"0px !important"
        },
        "&.label.MuiInput-formControl":{
            marginTop:"0px"
        },
    }
    
    
}));

export default useStyles