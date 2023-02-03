import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <>
      <header className='template-header'>
      <section className='template-nav grid grid-cols-3'>
        <div className="logo-brand">
          <img src="..." alt="..." />
        </div>
        <div className="nav-template">
          <ul className='list-nav flex'>
            <li>Lịch chiếu</li>
            <li>Cụm Rạp</li>
            <li><a href='#movie-news'>Tin Tức</a></li>
            <li>Ứng Dụng</li>
          </ul>
        </div>  
        <div className="template-login-block">
          <div className="login">Đăng nhập</div>
         <div className='register'>Đăng ký</div>
        </div>
      </section>
      </header>
      <div className='body' style={{ minHeight: '90vh' }}>
        {<Outlet />}
      </div>
      <footer className='bold text-3xl'>Footer</footer>
    </>
  )
}

export default HomeTemplate