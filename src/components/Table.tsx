import React, { useContext, useState } from 'react';
import { ThemeContext } from './ContextApi';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const Table = () => {
  const { cart, setCart } = useContext(ThemeContext);
  const handleRemove = (id: number) => {
    const updatedCart = cart.filter((item: any) => item.id !== id);
    setCart(updatedCart);
  };
  return (
    <section className="relative my-10">
      <div className="max-w-[94%] mx-auto overflow-x-auto">
        {
          cart.length > 0 ?
            <table className="w-full border-collapse text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Images</th>
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Unit Price</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((elem: any) => (
                  <tr key={elem.id} className="bg-white hover:bg-gray-100 transition">
                    <td className="p-2 border flex justify-center">
                      <Image src={elem.thumbnail} alt="img" width={130} height={100} className="rounded-lg" />
                    </td>
                    <td className="p-2 border">{elem.title}</td>
                    <td className="p-2 border">${elem.price}</td>
                    <td className="p-2 border">{elem.stock}</td>
                    <td className="p-2 border">${elem.price}</td>
                    <td className="p-2 border text-center">
                      <button className="text-black" onClick={() => handleRemove(elem.id)}>
                        <CloseIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            : <p className="text-center text-gray-500">No items in the cart</p>
        }
      </div>
    </section>
  );
};

export default Table;
