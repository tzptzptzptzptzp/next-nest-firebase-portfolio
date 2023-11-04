import { FullScreenContainerType } from "../elements.type"

export const FullScreenContainer = ({
  children,
  position = 'center',
  width = '50%'
}: FullScreenContainerType) => {
  const justifyPosition = `justify-${position}`
  return (
    <div className={`flex items-center ${justifyPosition} w-full h-screen`}>
      <div style={width ? { width: `${width}` } : undefined}>
        {children}
      </div>
    </div>
  )
}