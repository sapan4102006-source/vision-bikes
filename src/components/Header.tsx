import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Centered Logo */}
          <div className="text-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672626923053-d64b3ddfc573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbG9nbyUyMGRlc2lnbnxlbnwxfHx8fDE3NTU3NzA2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Vision Bikes Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}