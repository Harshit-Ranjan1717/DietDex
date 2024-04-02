import React from 'react'
import { features } from '../utils/constants'
import Template from './Template'

const Body = () => {

  return (
    <>
    {
      features.map((feature) =>(
        <Template key={feature.id} data={feature} ></Template>
      ))
    }
    </>
  )
}

export default Body
