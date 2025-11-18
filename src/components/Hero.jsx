import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#fff3ea] via-[#ffe9f2] to-white">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      {/* Navigation */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-lg backdrop-blur">
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">CraftsFusion</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <a href="#new" className="text-slate-700 transition hover:text-slate-900">New</a>
          <a href="#dresses" className="text-slate-700 transition hover:text-slate-900">Dresses</a>
          <a href="#tops" className="text-slate-700 transition hover:text-slate-900">Tops</a>
          <a href="#accessories" className="text-slate-700 transition hover:text-slate-900">Accessories</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-amber-200/40 transition hover:shadow-amber-300/60">Sign in</button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <h1 className="mb-4 text-5xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Dreamy couture for whimsical hearts
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-600">
            Step into a fantasy of flowing silks, glimmering details, and timeless silhouettes crafted for modern muses.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#catalog" className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-amber-200/70 transition hover:bg-amber-600">Shop new arrivals</a>
            <a href="#about" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-900/10 transition hover:ring-slate-900/20">Our story</a>
          </div>
        </div>
        <div className="order-1 h-[480px] w-full rounded-3xl bg-transparent md:order-2 md:h-[560px]">
          <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Soft overlay sparkles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(255,214,165,0.35),transparent_40%)]" />
    </section>
  );
};

export default Hero;
