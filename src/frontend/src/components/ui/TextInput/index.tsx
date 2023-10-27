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
    isError = false,
    onChange,
    type = 'text',
    value,
    width,
    ...props
  }, ref) => {
    const disabled = props.disabled
    const id = props.name
    return (
      <input
        className={`${disabled ? 'h-0' : 'p-2'} border-b ${isError ? 'border-red-400' : 'color-border'} !outline-0 focus-visible:outline-none color-text ${className}`}
        style={width ? { width: `${width}` } : undefined}
        ref={ref} id={id} type={type} value={value} onChange={onChange} {...props}
      />
    )
  }
)