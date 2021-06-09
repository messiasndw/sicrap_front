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

const CustomInput = ({ onClear, value, label, isClearable = false, disabled=false, ...rest }) => {

  const classes = useStyles()

  const errorMessage = rest.error ? <FormHelperText id="component-error-text">Code is required</FormHelperText> : null

  return (
    <>
      <Grid>
      <FormControl error={rest.error}>
        {label && <FormLabel children={label} />}
        <Input  disabled={disabled} classes={{ underline: classes.underline, root: classes.inputRoot }} value={value} endAdornment={value && isClearable && <IconButton
          classes={{ root: classes.IconButtonRoot }}

          onClick={onClear}
        >
          <CancelRoundedIcon classes={{ root: classes.iconRoot }} />
        </IconButton>}
          inputProps={{ classes: { underline: classes.underline } }} {...rest} />
            {errorMessage}
          </FormControl>
      </Grid>
    </>
  )
}

export default CustomInput