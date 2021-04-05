import TextFielMaterial from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    underline: {
        "&:after": {
            borderBottom: "2px solid #BBC4C2",
        }, 
    },
    labelRoot:{
        color:"#BBC4C2",
        "&.Mui-focused": {
            color: "#BBC4C2",
        }, 
    }
});
const TextField = (props) => {

    const classes = useStyles()

    return (
        <TextFielMaterial {...props} InputLabelProps={{classes:{root:classes.labelRoot}}} InputProps={{classes:{underline: classes.underline}}} />
    )
}

export default TextField