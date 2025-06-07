import { Inter, Raleway } from 'next/font/google'

export const inter = Inter({ 
    subsets: ['latin'],
    weight:["500","700"],
    variable: '--font-inter',

})
export const raleway = Raleway({
  weight: "500",
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})