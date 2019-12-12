import React from 'react'

import s from './MegaMenu.m.css'

export default ({items}) => {
  return (
    <div className={s.wrapper}>
      {items.map(item => {
        return (
          item.label
        )
      })}
    </div>
  )
}