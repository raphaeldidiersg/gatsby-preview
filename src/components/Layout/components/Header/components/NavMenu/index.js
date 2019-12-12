import React from 'react'
import { Link } from 'gatsby'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MegaMenu from '../MegaMenu'

import s from './Menu.m.css'

const useStyles = makeStyles(() =>
  createStyles({
    subBar: {
      fontWeight: 'bold',
      minHeight: 'unset',
      height: 'unset',
      paddingTop: '20px',
      paddingBottom: '20px'
    }
  })
)

export default ({ menu }) => {
  const classes = useStyles()

  return (
    <Toolbar classes={{root: classes.subBar}}>
      {menu.map(item => {
        return (
          <div key={item.label} className={s.item}>
            {item.children
              ? <div>
                  <div>{item.label}</div>
                  <MegaMenu items={item.children} />
                </div>
              : <Link to={item.link}>{item.label}</Link>
            }
          </div>
        )
      })}
    </Toolbar>
  )
}