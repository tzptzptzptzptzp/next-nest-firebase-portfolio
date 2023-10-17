import { useCallback } from "react"
import { FormElement, FormElementProps } from "../FormElement"
import { TextInput, TextInputType } from "../../TextInput"

import { type FieldValues, useController, Control } from "react-hook-form"

type Props<T extends FieldValues> = {
  style?: string
} & FormElementProps<T> & TextInputType

export const FormTextInput = <T extends FieldValues>({
  autoComplete = 'off',
  maxLength = 250,
  type = 'text',
  ...props
}: Props<T>) => {
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
        control={control as Control<FieldValues, unknown>}
        errorOff={errorOff}
        errorStyle={errorStyle}
        formStyle={formStyle}
        isRequired={isRequired}
        label={label}
        labelStyle={labelStyle}
        name={name}
      >
        <div>
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