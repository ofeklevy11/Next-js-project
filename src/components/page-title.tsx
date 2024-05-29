import React from 'react'

const PageTitle = ({title} : {title: string}) => {
  return (
    <h1 className='text-center text-3xl font-semibold capitalize'>{title}</h1>

  )
}

export default PageTitle