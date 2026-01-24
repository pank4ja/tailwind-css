import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div>
      <Image src="/images/1.png" height={300} width={300} alt={"first image"} />
    </div>
  )
}

export default Card
