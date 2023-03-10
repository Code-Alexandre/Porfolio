import React from 'react'

import { Footer, Blog, Possibility, Features, MyProject, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <MyProject />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App