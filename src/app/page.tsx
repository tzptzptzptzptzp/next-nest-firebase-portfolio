import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex-center relative centering-x w-screen h-screen">
      <div className="flex relative w-full h-full">
        <Profile />
        <div className='relative top-0 right-0 w-2/3 h-full py-24 pr-24 bg-main dark:bg-bg_dark'>
          <div className='overflow-y-scroll h-full'>
            <div className='bg-bg_light dark:bg-bg_dark'></div>
          </div>
        </div>
      </div>
    </main>
  )
}
