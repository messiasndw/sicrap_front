import TextFielMaterial from '@material-ui/core/TextField';
import useStyles from './styles'
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { IconButton } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import { useEffect, useState } from 'react';
import InputLabel from '../InputLabel'
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const CustomInput = ({ onClear, value, label, isClearable = false, disabled=false, errorMessage, ...rest }) => {

  const classes = useStyles()

  const a = rest.error && errorMessage != null ? <FormHelperText id="component-error-text">{errorMessage}</FormHelperText> : null

  return (
    <>
      <Grid>
      <FormControl error={rest.error} classes={{root:classes.formControlRoot}} >
        {label && <FormLabel children={label} classes={{root:classes.labelRoot}} />}
        <Input disabled={disabled} classes={{ underline: classes.underline, root: classes.inputRoot }} value={value} endAdornment={value && isClearable && <IconButton
          classes={{ root: classes.IconButtonRoot }}

          onClick={onClear}
        >
          <CancelRoundedIcon classes={{ root: classes.iconRoot }} />
        </IconButton>}
          inputProps={{ classes: { underline: classes.underline } }} {...rest} />
            {a}
          </FormControl>
      </Grid>
    </>
  )
}

export default CustomInput