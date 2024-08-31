import fetchingData from '@/data/FetchingData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";

const SearchInputData = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (searchTerm.length > 0) {
            fetchProducts(searchTerm);
        } else {
            setProducts([]);
        }
    }, [searchTerm]);
    const fetchProducts = async (query: string) => {
        try {
            const response = await fetchingData(`https://dummyjson.com/products?sortBy=title&order=asc`);
            const filteredProducts = response.products.filter((product: any) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div className='relative'>
            <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-[40px] p-6 border"
            />
            <div className="absolute top-3 right-4">
                <SearchIcon className="text-2xl" />
            </div>
            <div className={`absolute top-12 px-2 overflow-y-scroll w-full ${searchTerm.length > 0 ? 'h-auto max-h-[700px] md:max-h-[400px]' : 'hidden'} bg-white border z-50 left-0 right-0 shadow-xl`}>
                {products.map((product: any) => (
                    <Link key={product.id} href={`/shop/${product.id.toString()}`} onClick={() => {
                        setProducts([])
                        setSearchTerm('')
                    }}>
                        <div className='flex items-center gap-2 my-6'>
                            <div className='w-[40%]'>
                                <Image src={product.thumbnail} alt='img' width={70} height={70} />
                            </div>
                            <div className='w-[60%]'>
                                <h5 className='text-gray-400 mb-1'>{product.title}</h5>
                                <p className='text-sm font-bold'>{product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchInputData