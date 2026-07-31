import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Filter,
  Star,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { Product, Language } from '../types';
import { mockProducts } from '../data/mockData';
import { translations } from '../data/translations';

interface MarketplaceProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderModalProduct, setOrderModalProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = [
    'All',
    'Seeds',
    'Fertilizers',
    'Pesticides',
    'Organic Products',
    'Farm Equipment',
    'Drones'
  ];

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setOrderModalProduct(null);
      setQuantity(1);
      setPincode('');
    }, 2500);
  };

  return (
    <section id="marketplace" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>DIRECT FARM INPUT MARKETPLACE</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.marketplaceTitle}
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              {t.marketplaceSubtitle}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search seeds, fertilizers, drones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg shadow-emerald-600/20'
                  : isDarkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-600'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl border overflow-hidden backdrop-blur-xl flex flex-col transition-all hover:-translate-y-1 group ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-600/50'
                  : 'bg-white border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Product Image & Badges */}
              <div className="relative h-48 bg-slate-950 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-[10px] uppercase shadow-md">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-emerald-400 font-bold text-[10px]">
                  {product.brand}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
                  </div>
                  <h3 className={`text-sm font-extrabold leading-snug line-clamp-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/20 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-emerald-400">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-500 font-bold block">Free Farm Delivery</span>
                  </div>

                  <button
                    onClick={() => setOrderModalProduct(product)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Order Modal */}
      {orderModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div
            className={`w-full max-w-lg p-6 sm:p-8 rounded-3xl border shadow-2xl relative ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              onClick={() => setOrderModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-800/50 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-emerald-400">Order Confirmed!</h3>
                <p className="text-xs text-slate-300">
                  Order ID #AGRI-{Math.floor(100000 + Math.random() * 900000)} placed successfully. Track delivery via SMS.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <img
                    src={orderModalProduct.image}
                    alt={orderModalProduct.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold leading-tight">{orderModalProduct.name}</h3>
                    <p className="text-xs text-emerald-400 font-black mt-1">
                      ₹{orderModalProduct.price.toLocaleString()} per unit
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">Select Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 rounded-lg bg-slate-800 text-white"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-black w-6 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 rounded-lg bg-slate-800 text-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">
                    Delivery Pincode / Village Address:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter 6-digit Pincode (e.g. 800001)"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Free Express Farm Delivery + Cash on Delivery / UPI Available</span>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Total Payable Amount:</span>
                    <span className="text-xl font-black text-amber-400">
                      ₹{(orderModalProduct.price * quantity).toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-extrabold text-xs shadow-lg"
                  >
                    Confirm Farm Order
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
