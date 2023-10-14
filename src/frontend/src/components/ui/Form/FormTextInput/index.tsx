import { useController } from "react-hook-form"
import { TextInput } from "../../TextInput"
import { FormElement } from "../FormElement"
import { useCallback } from "react"

export const FormTextInput = ({
  autoComplete = 'off',
  maxLength = 250,
  type = 'text',
  ...props
}) => {
  const {
    control,
    disabled,
    errorOff,
    isError,
    isRequired,
    label,
    name,
    placeholder,
    style,
  } = props

  const {
    field,
    fieldState: { error }
  } = useController({ control, name })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length <= maxLength) {
        field.onChange(e)
      }
    },
    [field, maxLength]
  )

  const containerStyle = ''
  const formStyle = ''
  const errorStyle = ''
  const labelStyle = ''
  return (
    <>
      <FormElement
        containerStyle={containerStyle}
        control={control}
        errorOff={errorOff}
        errorStyle={errorStyle}
        formStyle={formStyle}
        isRequired={isRequired}
        label={label}
        labelStyle={labelStyle}
        name={name}
      >
        <div className={`${disabled && ''}`}>
          <TextInput
            autoComplete={autoComplete}
            className={style}
            {...control.register(name)}
            disabled={disabled}
            error={error}
            isError={isError}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={String(field.value)}
            width='100%'
          />
        </div>
      </FormElement>
    </>
  )
}