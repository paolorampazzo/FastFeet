/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (height = 45) =>
  makeStyles((theme) => ({
    inputRoot: {
      color: '#999999',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 4,
        height,
        fontSize: 16,
        margin: 'auto',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 4,
        height: 45,
        fontSize: 16,
        notShow: 1,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 4,
        height: 45,
        fontSize: 16,
        notShow: 1,
      },
    },
  }));

export default function CountrySelect({
  width,
  placeholder,
  data,
  onChange,
  onLoad,
  label = '',
  height,
}) {
  const classes = useStyles(height)();
  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width }}
      options={data}
      classes={classes}
      onChange={onChange}
      freeSolo={false}
      autoHighlight
      getOptionLabel={(option) => (option.name ? option.name : option)}
      renderOption={(option) => <>{option.name ? option.name : option}</>}
      renderInput={(params) => (
        <TextField
          {...params}
          // label={classes.inputRoot.margin}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          inputProps={{
            ...params.inputProps,

            // autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
