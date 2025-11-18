import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-white shadow">
            {product.tag}
          </span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 text-base font-medium text-slate-900">{product.title}</h3>
          <span className="text-sm font-semibold text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center gap-1 pt-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
