import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './styles'

const CustomInputLabel = (props) => {

    const classes = useStyles()

    return (
        <InputLabel classes={{root:classes.root}} {...props} />
    )
}

export default CustomInputLabel