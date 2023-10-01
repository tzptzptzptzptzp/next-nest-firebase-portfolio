"use client"

import { Content } from '@/components/Content'
import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'

import { useAppSelector } from "@/redux/hooks"

import { dataType } from "@/types/data.type"

export default function Home() {
  const data: dataType = useAppSelector((state) => state.data.data)

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
