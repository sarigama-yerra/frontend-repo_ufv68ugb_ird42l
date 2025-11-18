import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">CraftsFusion</h4>
            <p className="mt-2 text-sm text-slate-600">Dreamy fashion for everyday fairytales.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Help</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Newsletter</h5>
            <div className="mt-2 flex gap-2">
              <input className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your email" />
              <button className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} CraftsFusion. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
