import './globals.css'
import { Solitreo, DM_Sans } from '@next/font/google'
const solitreo = Solitreo({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-solitreo'
})
const playfairDisplay = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfairDisplay'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${solitreo.variable} ${playfairDisplay.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
