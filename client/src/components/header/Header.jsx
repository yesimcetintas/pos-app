import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Header = () => {
  return (
    <div className='border-b mb-6'>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <a href="/">
                    <h2 className='text-sm font-bold md:text-4xl'>LOGO</h2>
                </a>
            </div>
            <div className="header-search flex-1">
                <Input 
                    size="large" 
                    placeholder="Ürün Ara..." 
                    prefix={<SearchOutlined />} 
                    className="rounded-full max-w-[800px]"/>
            </div>
            <div className="menu-links flex justify-center items-center gap-10">
                <a href={"/"} className="menu-link flex flex-col">
                    <HomeOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Anasayfa 
                    </span>
                </a>
                <a href={"/"} className="menu-link flex flex-col">
                    <ShoppingCartOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Sepet 
                    </span>
                </a>
                <a href={"/"} className="menu-link flex flex-col">
                    <HomeOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Anasayfa 
                    </span>
                </a>
                <a href={"/"} className="menu-link flex flex-col">
                    <HomeOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Anasayfa 
                    </span>
                </a>
                <a href={"/"} className="menu-link flex flex-col">
                    <HomeOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Anasayfa 
                    </span>
                </a>
                <a href={"/"} className="menu-link flex flex-col">
                    <HomeOutlined className="md:text-2xl text-xl" />
                    <span className='md:text-sm text-[10px]'>
                        Anasayfa 
                    </span>
                </a>
                {/* <a href={"menu-link"}>
                    <span>
                        <ShoppingCartOutlined />
                    </span>
                    <p>Sepet</p>
                </a> */}
            </div>
        </header>

    </div>
  )
}

export default Header
