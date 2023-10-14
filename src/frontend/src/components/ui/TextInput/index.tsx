import { forwardRef } from 'react'

import { useAppSelector } from '@/redux/hooks'

import { InputAttributeType, InputType } from '../ui.type'

type Props = {
  value?: string
  type?: InputAttributeType
  width?: string
} & Omit<InputType, 'value'>

export const TextInput = forwardRef<HTMLInputElement, Props>(
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