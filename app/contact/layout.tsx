import React from 'react'
import Sheet from '../_component/Sheet';
import Hero from '../_component/Hero';

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <>
      <Hero title="Contact" sub="問い合わせ"/>
      <Sheet>{children}</Sheet>
    </>
  )
}

export default RootLayout