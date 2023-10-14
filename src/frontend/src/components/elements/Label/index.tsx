import { VFC } from "react";

import type { LabelType } from '../elements.type'

export const Label: VFC<LabelType> = ({
  htmlFor,
  isRequired = false,
  style = '',
  text
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={style}>
        {text}
        {isRequired && <span className="text-red-400">*</span>}
      </label>
    </>
  )
}