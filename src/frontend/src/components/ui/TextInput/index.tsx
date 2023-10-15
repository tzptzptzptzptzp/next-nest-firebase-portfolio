import { forwardRef } from 'react'

import { useAppSelector } from '@/redux/hooks'

import { FieldError } from 'react-hook-form'
import { InputAttributeType, InputType } from '../ui.type'

export type TextInputType = {
  className?: string
  error?: FieldError
  isError?: boolean
  type?: InputAttributeType
  value?: string
  width?: string
} & Omit<InputType, 'value'>

export const TextInput = forwardRef<HTMLInputElement, TextInputType>(
  ({
    className = '',
    value,
    type = 'text',
    width,
    onChange,
    ...props
  }, ref) => {
    const isTheme = useAppSelector((state) => state.theme.value)
    return (
      <input
        className={`p-2 border color-border rounded-lg ${isTheme === 'light' ? 'color-bg' : ''} color-text ${className}}`}
        style={width ? { width: `${width}` } : undefined}
        ref={ref} type={type} value={value} onChange={onChange} {...props}
      />
    )
  }
)