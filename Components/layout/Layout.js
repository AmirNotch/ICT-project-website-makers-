import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import TopMain from '../top-main/TopMain';
import Footer from '../main/Footer';
import Button from '../main/Button';

export function Layout() {
  return (
    <>
      <TopMain />
      <Header />
      <Main />
      <Footer/>
      <Button/>
    </>
  )
}
