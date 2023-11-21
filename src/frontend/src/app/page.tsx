"use client"

import { Content } from '@/components/features/Content'
import { Header } from '@/components/organisms/Header'
import { Profile } from '@/components/features/Profile'

import { useAppSelector } from "@/redux/hooks"

import { HomeContent as content } from '@/data/content'

import { dataType } from "@/types/data.type"

export default function Home() {
  const data: dataType = useAppSelector((state) => state.data.data)
  return (
    <main className="flex-center relative centering-x w-screen h-screen">
      <div className="flex relative w-full h-full">
        <Header />
        <Profile data={data.profile} />
        <Content data={data.content} content={content} />
      </div>
    </main>
  )
}
