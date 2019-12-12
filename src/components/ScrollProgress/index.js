import React, { useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'

const styles2 = makeStyles({
  root2: {
    color: '#00695c',
    position: 'fixed',
    left: '0',
    top: '126px',
    width: '100%'
  },
})

export default () => {
  const [value, setValue] = useState(0)
  const classes = styles2()

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollVal = window.pageYOffset || document.body.scrollTop
      setValue(Math.min((scrollVal / (window.document.body.offsetHeight - window.innerHeight)) * 100, 100))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <LinearProgress classes={{root: classes.root2}} variant="determinate" value={value} />
  )
}