import React from 'react'
import Image from 'next/image'

function Icon(props) {
  return (
    <Image
      src={props.url}
      alt={props.url || ''}
      width={40}
      height={40}
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
    />
  )
}

export default Icon