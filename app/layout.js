import './globals.css'
import { Solitreo } from '@next/font/google'
const solitreo = Solitreo({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-solitreo'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={solitreo.variable}>
      <head />
      <body>{children}</body>
    </html>
  )
}
