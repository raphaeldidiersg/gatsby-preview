import React from "react"
import { ThemeProvider } from '@material-ui/styles'
import s from './layout.m.css'
import theme from './theme'
import Header from "./components/Header"
import './index.css'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className={s.wrapper}>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
