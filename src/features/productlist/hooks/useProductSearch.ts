import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { getProducts } from '../services/ProductService';

export const useProductSearch = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'made' | 'processed'>('made');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProducts().then(setAllProducts);
  }, []);

  useEffect(() => {
    let productsToFilter = allProducts.filter(product => product.type === activeTab);

    if (searchTerm) {
      productsToFilter = productsToFilter.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(productsToFilter);
  }, [allProducts, activeTab, searchTerm]);

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  return {
    filteredProducts,
    activeTab,
    setActiveTab,
    searchTerm,
    handleSearchChange,
  };
};
