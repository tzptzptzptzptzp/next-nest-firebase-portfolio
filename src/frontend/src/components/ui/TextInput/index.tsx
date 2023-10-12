import { forwardRef } from 'react'

import { useAppSelector } from '@/redux/hooks'

import { InputAttributeType, InputType } from '../ui.type'

type Props = {
  value?: string
  type?: InputAttributeType
} & Omit<InputType, 'value'>

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({
    value,
    type = 'text',
    onChange,
    ...props
  }, ref) => {
    const isTheme = useAppSelector((state) => state.theme.value)
    return (
      <input
        className={`p-2 border color-border rounded-lg ${isTheme === 'light' ? 'color-bg' : ''} color-text`}
        ref={ref} type={type} value={value} onChange={onChange} {...props}
      />
    )
  }
)