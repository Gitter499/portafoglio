import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SuperCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

 

  return (
    <>
      
      <div className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden'>
        <Component {...pageProps} />
      </div>
      {Component?.r3f && <SuperCanvas>{Component.r3f(pageProps)}</SuperCanvas>}
    </>
  )
}
export default App
