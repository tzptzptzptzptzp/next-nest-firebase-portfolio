type Props = {
  bg?: string
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: (
    e: React.ChangeEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | null) => void | Promise<void | boolean | null>
  ref?: React.Ref<HTMLButtonElement>
  text?: string | number
  type?: 'button' | 'reset' | 'submit'
}

export const Button = ({
  bg,
  children,
  className = '',
  disabled,
  ref,
  text,
  type = 'button',
  ...props
}: Props) => {
  return (
    <>
      <button
        className={`${bg} ${className}`}
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      >
        {children ? children : text}
      </button>
    </>
  )
}