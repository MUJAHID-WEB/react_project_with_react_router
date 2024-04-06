import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Book() {

    const {id} = useParams()
    const obj = useOutletContext()
  return (
    <div>Book {id} {obj.hello}</div>
  )
}
