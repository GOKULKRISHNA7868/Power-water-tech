import React from 'react';

const products = [
  {
    title: 'ACLAN Water Purifiers',
    description: 'We manufacture and supply certified spare parts ensuring the long durability of our products.',
  },
  {
    title: 'ACLAN Water Dispensers',
    description: 'Our dispensers make it convenient to have cold drinking water whenever you want it. They are easy to set up and maintain.',
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <section id="products" className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
