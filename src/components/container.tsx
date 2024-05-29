import React from 'react'

const Container = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='max-w-[1100px] mx-auto flex flex-col h-screen '>
        {children}
    </div>
  )
}

export default Container