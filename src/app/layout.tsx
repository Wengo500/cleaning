import { inter, raleway } from './fonts'
import './globals.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <head>
        <title>Super Cleaning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
