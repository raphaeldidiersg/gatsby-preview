import React from "react"
import { Link } from 'gatsby'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import SearchBar from './components/SearchBar'
import NavMenu from './components/NavMenu'
import NavDrawer from './components/NavDrawer'
import DesktopLogo from './assets/desktop-lmsg-logo.svg'

import s from './header.m.css'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger} id="header">
      {children}
    </Slide>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    burgerIcon: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    drawer: {
      width: '50%'
    },
    root: {
      margin: '0 5px'
    },
    svgLabel: {
      color: '#7B7B7B'
    }
  })
)

const Header = (props) => {
  const classes = useStyles()
  const [open, isOpen] = React.useState(false)

  const menu = [{
    label: 'PIÈCE À RÉNOVER',
    children: [{
      label: 'Chambre',
      link: '/chambre'
    },{
      label: 'Cuisine',
      link: '/cuisine'
    },{
      label: 'Salle de bain',
      link: '/salle-de-bain'
    }]
  },{
    label: 'NOS GUIDES',
    link: '/nos-guides'
  },{
    label: 'INSPIREZ-VOUS',
    link: '/inspirez-vous'
  }]
  
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => isOpen(true)}
              edge="start"
              classes={{root: classes.burgerIcon}}
            >
              <MenuIcon />
            </IconButton>
            <Link to='/'>
              <DesktopLogo className={s.lmsgLogoDesktop} />
              {/* <MobileLogo className={s.lmsgLogoMobile} /> */}
            </Link>
            <SearchBar />
            <Box display="flex">
              <Button
                classes={{
                  root: classes.root,
                  label: classes.svgLabel
                }}
              >
                <PersonIcon
                  classes={{root: classes.svgRoot}}
                  fontSize="small"
                />
                Connexion
              </Button>
              <Button  
                classes={{
                  root: classes.root
                }}
                variant="contained"
                color='primary'
              >
                J’ai un projet
              </Button>
            </Box>
          </Toolbar>
          <NavMenu menu={menu} />
        </AppBar>
      </HideOnScroll>
      <SwipeableDrawer
        open={open}
        onClose={() => isOpen(false)}
        onOpen={() => isOpen(true)}
        classes={{paper: classes.drawer}}
      >
        <NavDrawer />
      </SwipeableDrawer>
    </div>
  )
}

export default Header
