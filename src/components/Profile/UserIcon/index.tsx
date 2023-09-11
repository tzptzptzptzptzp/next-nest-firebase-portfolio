import Image from 'next/image'
export const UserIcon = () => {
  return (
    <div>
      <Image
        className='rounded-full border-4 border-amber-200 bg-amber-200'
        src="/images/bisyojo_chan_500.png"
        width={250}
        height={250}
        alt="UserIcon"
      />
    </div>
  )
}
