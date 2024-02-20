import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
    { name: 'React', slug: 'react' },
    { name: 'Web Development', slug: 'web-dev' }
]

const header = () => {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <Link className='logo-container' href='/'>
                    <img
                        src="/Lucas_logo.png"
                        alt="Lucas Logo"
                        className='logo-image'
                    />
                    <p className="logo-name">Lucas Alves</p>
                </Link>

                <div className="categories">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <div className="category">
                                {category.name}
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default header
