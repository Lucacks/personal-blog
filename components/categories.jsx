import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { getCategories } from '@/services';

const postCard = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='categories-container'>
            <h3 className="categories-title">
                Filtros
            </h3>

            {categories.map((category) => (
                <Link
                    className='category'
                    key={category.slug}
                    href={`/category/${category.slug}`}
                >
                    {category.name}
                </Link>
            ))}
        </div>
    )
}

export default postCard
