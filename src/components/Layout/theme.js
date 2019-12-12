import { createMuiTheme } from '@material-ui/core/styles'
import './index.css'

export default createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: '#444444',
        backgroundColor: '#fff'
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#52ABAF',
        '&:hover': {
          backgroundColor: '#458e92',
        }
      },
      root: {
        colorPrimary: {
          backgroundColor: '#52ABAF'
        }
      },
      label: {
        textTransform: 'none'
      }
    }
  },
  palette: {
    background: {
      default: '#fff'
    },
    error: {
      main: '#fff'
    },
    primary: {
      main: '#010101'
    },
    secondary: {
      main: '#19857b'
    }
  }
})