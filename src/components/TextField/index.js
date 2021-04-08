import TextFielMaterial from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './styles'

const TextField = (props) => {

    const classes = useStyles()

    return (
        <TextFielMaterial {...props} InputLabelProps={{classes:{root:classes.labelRoot}}} InputProps={{classes:{underline: classes.underline}}} />
    )
}

export default TextField