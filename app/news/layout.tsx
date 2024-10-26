import React from 'react'
import Sheet from '../_component/Sheet';
import Hero from '../_component/Hero';

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <>
      <Hero title="News" sub="ニュース"/>
      <Sheet>{children}</Sheet>
    </>
  )
}

export default RootLayout