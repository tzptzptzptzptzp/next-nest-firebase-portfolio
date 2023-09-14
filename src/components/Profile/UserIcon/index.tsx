import Image from 'next/image'
export const UserIcon = () => {
  return (
    <div>
      <Image
        className='rounded-full border-[6px] border-bg_light dark:border-text_dark bg-bg_light dark:bg-text_dark'
        src="/images/bisyojo_chan_500.png"
        width={250}
        height={250}
        alt="UserIcon"
      />
    </div>
  )
}
