import React from 'react'
import { history } from '../..'

type Props = {}

const Register = (props: Props) => {
  return (
    <>
    <button className='btn' onClick={() => {
        history.push('/login')
    }}>Login</button>
    </>
  )
}

export default Register