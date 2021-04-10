import Button from '@material-ui/core/Button';
import useStyles from './styles'


const CustomButton = (props) => {

    const classes = useStyles()

    return (
        <Button classes={{root:classes.root}} {...props} />
    )
}

export default CustomButton