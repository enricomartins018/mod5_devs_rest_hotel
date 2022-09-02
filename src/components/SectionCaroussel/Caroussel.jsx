import React from 'react'
import S from './Caroussel.module.css'

export const Caroussel = () => {
  return (
    <div className={S.pic_cnt}>
    <img  src="https://picsum.photos/200/300?t=1" alt="" className={S.pic}/>
    <img src="https://picsum.photos/200/300?t=2" alt="" className={S.pic}/>
    <img src="https://picsum.photos/200/300?t=3" alt="" className={S.pic}/>
    <img src="https://picsum.photos/200/300?t=4" alt="" className={S.pic}/>
    <img src="https://picsum.photos/200/300?t=5" alt="" className={S.pic}/>
  </div>
  )
}

