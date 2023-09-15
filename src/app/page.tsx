import { Content } from '@/components/Content'
import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex-center relative centering-x w-screen h-screen">
      <div className="flex relative w-full h-full">
        <Profile />
        <Content />
      </div>
    </main>
  )
}
