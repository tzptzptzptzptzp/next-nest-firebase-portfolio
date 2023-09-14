import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex-center relative centering-x w-screen h-screen">
      <div className="flex relative w-full h-full">
        <div className='relative top-0 left-0 w-1/3 h-full'>
          <Profile />
        </div>
        <div className='relative top-0 right-0 overflow-y-scroll w-2/3 h-full'>

        </div>
      </div>
    </main>
  )
}
