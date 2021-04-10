import {makeStyles} from '@material-ui/core/styles';
import {inputColors} from '../../layouts/Auth/config'

const useStyles = makeStyles( theme => ({

    //HEADER
    headerRoot:{
        height:"100%",
        width:"100%",
        backgroundColor:inputColors.primary,
        color:inputColors.focused,
        backgroundSize:"fixed",
        display:"flex",
        alignItems:"center",
        // backgroundImage:"url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsights-inteliot%2Ffiles%2F2018%2F10%2FiStock-926689776-1200x794.jpg)",
        background:"url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsights-inteliot%2Ffiles%2F2018%2F10%2FiStock-926689776-1200x794.jpg)",
        opacity:"0.6",
    },
    headerText:{
        marginLeft:"55px",
    }
}));

export default useStyles