import React from 'react';
import ProductImage from './ProductImage';

const ProductCardView = ({ products, category }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">{product.id}</h3>
            <h4 className="text-gray-800 font-medium mb-4">{product.name}</h4>
            
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Rozmery:</span>
                <span className="text-gray-800">{product.dimensions}</span>
              </div>
              
              {category === "cenovky" && (
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Balenie:</span>
                  <span className="text-gray-800">{product.packaging}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <ProductImage
                productId={product.id}
                type="front"
                category={category}
                alt={`${product.name} predná strana`}
                size="lg"
              />
              {product.hasBackside && (
                <ProductImage
                  productId={product.id}
                  type="back"
                  category={category}
                  alt={`${product.name} zadná strana`}
                  size="lg"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardView;