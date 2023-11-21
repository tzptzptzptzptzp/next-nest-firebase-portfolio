import { forwardRef } from "react"

import type { TextType } from "../atoms.type"

export const Text = forwardRef<HTMLParagraphElement, TextType>(
  ({
    bold = false,
    children,
    color = 'text-current',
    size = '1.6rem',
    style = ''
  }, ref) => (
    <>
      <p
        className={`${bold && 'font-bold'} ${size} ${color} ${style}`}
        ref={ref}
      >
        {children}
      </p>
    </>
  )
)