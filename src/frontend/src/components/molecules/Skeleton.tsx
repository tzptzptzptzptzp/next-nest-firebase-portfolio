import SkeletonWrap from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  children: React.ReactNode
  circle?: boolean
  count?: number
  duration?: number
  height?: number | '100%'
  isLoading: boolean
  width?: number | '100%'
  wrapClassName?: string
}

export const Skeleton = ({
  children,
  circle,
  count,
  duration,
  height,
  isLoading,
  width = 100,
  wrapClassName,
}: Props) => {
  return (
    <div className={wrapClassName}>
      {isLoading ? (
        <SkeletonWrap className='cursor-not-allowed' circle={circle} count={count} duration={duration} height={height} width={width} />
      ) : (
        children
      )}
    </div>
  )
}