import { makeStyles} from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    autoCompleteRoot: {
        marginTop:"4px"
    },
    inputRoot:{
        paddingRight:"0px !important"
    },
    IconButtonRoot:{
        padding:"0px"
    },
    iconRoot:{
        height:"0.7em"
    },
    underline:{
        "&:before": {
            borderBottom:`2px solid ${inputColors.primary}`
        }, 
        "&:after": {
            borderBottom:`2px solid ${inputColors.focused}`
        }, 
    },
}));

export default useStyles