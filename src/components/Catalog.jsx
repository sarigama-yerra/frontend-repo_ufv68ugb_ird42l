import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        if (Array.isArray(data) && data.length === 0) {
          // attempt seeding
          const seed = await fetch(`${API_BASE}/api/products/seed`, { method: 'POST' });
          const seeded = await seed.json();
          setProducts(seeded);
        } else {
          setProducts(data);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <section id="catalog" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-slate-600">Loading dreamy pieces...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="catalog" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-rose-600">{error}</p>
      </section>
    );
  }

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">New Arrivals</h2>
          <p className="text-slate-600">Fantasy-spun styles just landed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
