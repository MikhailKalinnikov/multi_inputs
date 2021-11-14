import  TextField  from "@material-ui/core/TextField";
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
});

export default Input;
