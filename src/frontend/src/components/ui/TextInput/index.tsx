import TextField, { TextFieldProps } from '@mui/material/TextField'

export const TextInput = (props: TextFieldProps) => {
  return (
    <TextField
      className={props.className}
      fullWidth={props.fullWidth}
      label={props.label}
      variant={props.variant}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      sx={{
        '& .MuiInputBase-root': {
          color: 'red'
        }
      }}
    />
  )
}