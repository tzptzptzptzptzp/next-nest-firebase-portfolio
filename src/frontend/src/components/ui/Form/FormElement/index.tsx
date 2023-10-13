import { PropsWithChildren, memo } from 'react'
import { Text } from '@/components/elements/Text'

import { type Control, type Path, type FieldErrors, type FieldError, type FieldValues, useController } from 'react-hook-form'

export type FormElementProps<T extends FieldValues> = {
  containerStyle?: string
  control: Control<T, unknown>
  errorOff?: boolean
  errorStyle?: string
  errors?: FieldErrors | FieldError
  formStyle?: string
  isRequired?: boolean
  label?: string
  labelStyle?: string
  name: Path<T>
}

const FormElementBase = <T extends FieldValues>({
  children,
  containerStyle,
  control,
  errorOff,
  errorStyle,
  formStyle,
  isRequired,
  label,
  labelStyle,
  name
}: PropsWithChildren<FormElementProps<T>>) => {
  const {
    fieldState: { error }
  } = useController({
    control,
    name
  })

  return (
    <>
      <div className={formStyle}>
        <div className={`${containerStyle ? containerStyle : ''}`}>
          {children}
        </div>
        {!errorOff && (
          <Text bold color={'text-red-400'} size={'2rem'}>
            {error?.message}
          </Text>
        )}
      </div >
    </>
  )
}

export const FormElement = memo(FormElementBase)