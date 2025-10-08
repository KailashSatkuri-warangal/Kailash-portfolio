import React from 'react'
import Image from 'next/image'

function Icon(props) {

  return (
    <Image {...props} src={props.url} alt = "" height="100" width="100"/>
  )
}

export default Icon