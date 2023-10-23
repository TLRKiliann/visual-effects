import React from 'react'
import './styles/AnimatedEyes.scss'

export default function AnimatedEyes() {
  return (
    <>
        <span className='span--eyescircle'>O</span>

        <div className='span--hut'>
            <span className='span--eyeshut hut--one'></span>
            <span className='span--eyeshut hut--two'></span>
            <span className='span--eyeshut hut--three'></span>
        </div>
    </>
  )
}
