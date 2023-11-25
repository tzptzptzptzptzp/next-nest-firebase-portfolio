import { useState } from "react"
import NextImage from "next/image"

import { Skeleton } from "@/components/molecules/Skeleton"

import type { ImageType } from "../atoms.type"

export const Image = ({
  alt = "Alternative",
  className,
  fill = false,
  height = 250,
  priority = false,
  quality = 78,
  skeleton = true,
  src,
  unoptimized = false,
  width = 250
}: ImageType) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <NextImage
        alt={alt}
        className={className}
        fill={fill}
        height={!fill ? height : undefined}
        onLoad={() => { setIsLoading(false) }}
        priority={priority}
        quality={quality}
        src={src}
        style={isLoading ? { visibility: "hidden" } : undefined}
        unoptimized={unoptimized}
        width={!fill ? width : undefined}
      />
      {isLoading && skeleton && (
        <Skeleton isLoading width={'100%'} height={100}>
        </Skeleton>
      )}
    </>
  )
}