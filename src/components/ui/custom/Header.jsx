import { Button } from '../../../ui/button'
import React, { useEffect } from 'react'

function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    console.log(user?.picture)
  })
  return (
    <div className='p-3 shadow-2xl flex justify-between items-center px-5'>
      <img src="/logo.svg" alt="" />
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <div className='rounded-full bg-gray-100 p-2 px-4'>My Trip</div>
            <img className='rounded-full cursor-pointer' src={user?.picture} alt="" width={35} />
          </div>
          :
          <Button>Sign In</Button>
        }
      </div>
    </div>
  )
}

export default Header