import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'


const SuperCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps }: AppProps) {


  return (
    <>
      
      <div className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden'>
        <Component {...pageProps} />
      </div>
      {/* @ts-ignore */}
      {Component?.r3f && <SuperCanvas>{Component.r3f(pageProps)}</SuperCanvas>}
    </>
  )
}
export default App
