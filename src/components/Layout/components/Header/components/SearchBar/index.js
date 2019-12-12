import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      flexGrow: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#E2E2E2', 0.8),
      '&:hover': {
        backgroundColor: fade('#E2E2E2', 1),
      },
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(2, 2, 2, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
    }
  })
)

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Recherche"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}