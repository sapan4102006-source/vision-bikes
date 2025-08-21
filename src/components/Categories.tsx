import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Categories() {
  const categories = [
    {
      title: 'Cruisers',
      description: 'Comfortable and stylish bikes perfect for long rides and city cruising.',
      image: 'https://images.unsplash.com/photo-1648300118596-cbf8f52df254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2VyJTIwbW90b3JjeWNsZXxlbnwxfHx8fDE3NTU3NzAyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Sportbikes',
      description: 'High-performance motorcycles designed for speed and agility on the road.',
      image: 'https://images.unsplash.com/photo-1641851544195-c3629b9cde93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydGJpa2UlMjByYWNpbmd8ZW58MXx8fHwxNzU1NzcwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Scooters',
      description: 'Convenient and fuel-efficient option for daily commuting and city travel.',
      image: 'https://images.unsplash.com/photo-1583322319396-08178ea4f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY29vdGVyfGVufDF8fHx8MTc1NTc3MDIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Mopeds',
      description: 'Classic and vintage-style bikes with a retro charm and easy handling.',
      image: 'https://images.unsplash.com/photo-1686300411675-75d01feca381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbW9wZWR8ZW58MXx8fHwxNzU1NzcwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our diverse fleet of premium two-wheelers, each category 
            carefully selected to meet your specific riding needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-primary"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 group-hover:bg-primary group-hover:text-black"
                >
                  View Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}