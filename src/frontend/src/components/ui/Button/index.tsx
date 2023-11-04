import styles from './Button.module.scss'

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
        className={`px-6 py-3 duration-200 ${bg} ${className} ${styles.button}`}
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