import { makeStyles} from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    paperWidthSm: {
        maxWidth:"1000px",
        height:"35%",
        width:"35%"
    },
    titleRoot:{
        backgroundColor: "#4E4F50",
        color:inputColors.focused
    },
    contentRoot:{
        padding:"16px 24px"
    },
    button:{
        color:"#4E4F50"
    }
}));

export default useStyles