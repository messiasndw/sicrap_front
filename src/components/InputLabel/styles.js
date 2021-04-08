import { makeStyles,useTheme  } from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    root: {
        color:inputColors.primary,
        "&.Mui-focused":{
            color:inputColors.focused
        }
    },
}));

export default useStyles