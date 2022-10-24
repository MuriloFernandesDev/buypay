import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyBottomNavigation from '../components/MyBottomNavigation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [showMyBottom, setShowMyBottom] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (
      router.asPath === '/register/home' ||
      router.asPath === '/register/name' ||
      router.asPath === '/register/document' ||
      router.asPath === '/register/email' ||
      router.asPath === '/register/confirm' ||
      router.asPath === '/register/password' ||
      router.asPath === '/register/terms'
    ) {
      setShowMyBottom(false)
    } else {
      setShowMyBottom(true)
    }
  }, [router.asPath])

  return (
    <>
      <Component {...pageProps} />

      {!!showMyBottom && <MyBottomNavigation />}
    </>
  )
}

export default MyApp
