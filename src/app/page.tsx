import { Content } from '@/components/Content'
import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main className="flex-center relative centering-x w-screen h-screen">
      <div className="flex relative w-full h-full">
        <Header />
        <Profile />
        <Content />
      </div>
    </main>
  )
}
