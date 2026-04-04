
"use client"

import { Search } from 'lucide-react';
import { useState } from 'react';
import { Header } from './components/ui/Header';
import { ProductCard } from './components/ui/ProductCard';
import { ContactSection } from './components/ui/ContactSection';
import { products } from './constant/constant';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-primary">Quality Healthcare Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your trusted partner in pharmaceutical solutions. Browse our comprehensive range of medications and healthcare products.
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Browse Products
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Our Products</h2>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                category={product.category}
                description={product.description}
                // dosage={product.dosage}
                imageUrl={product.image}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">&copy; 2026 MediCare Plus. All rights reserved.</p>
          <p className="text-sm opacity-90">
            This is a marketing catalog. Always consult with a healthcare professional before using any medication.
          </p>
        </div>
      </footer>
    </div>
  );
}