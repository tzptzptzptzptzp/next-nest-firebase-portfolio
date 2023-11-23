import '../css/index.scss'
import { Providers } from '@/reducks/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
