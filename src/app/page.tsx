import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex-center relative centering-x w-screen h-screen p-28">
      <div className="w-full max-w-screen-xl h-full overflow-y-scroll">
        <Profile />
      </div>
    </main>
  )
}
