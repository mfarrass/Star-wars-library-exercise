import React from 'react'

const MovieDetail = (props) => {
    // label dan value diambil dari props
  return (
    <div><strong>{props.label}:</strong>{props.value}</div>
  )
}

export default MovieDetail