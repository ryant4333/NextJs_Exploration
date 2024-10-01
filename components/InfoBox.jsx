import Link from 'next/link'
import React from 'react'

function InfoBox({
    heading,
    backgroundColor = 'bg-gray-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children
}) {
  return (
    <div>
        <h2>for renters</h2>
        <p>find dream rental</p>
        <Link href='/properties'>Browse Properties</Link>
        
    </div>
  )
}

export default InfoBox