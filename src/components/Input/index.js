import TextFielMaterial from '@material-ui/core/TextField';
import useStyles from './styles'
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { IconButton } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import { useEffect, useState } from 'react';
import InputLabel from '../InputLabel'
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
const CustomInput = ({onClear, value, label, isClearable = false, ...rest}) => {

    const classes = useStyles()

    return (
      <>
      <Grid>
      {label && <FormLabel children={label} />}
        <Input classes={{underline: classes.underline, root:classes.root}} value={value} endAdornment={value && isClearable && <IconButton
          classes={{root:classes.IconButtonRoot}}
        
        onClick={onClear}
      >
        <CancelRoundedIcon classes={{root:classes.iconRoot}} />
      </IconButton>} 
      inputProps={{classes:{underline: classes.underline}}} {...rest} />
      </Grid>
      </>
    )
}

export default CustomInput