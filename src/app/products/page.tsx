"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { getProducts, getCategories, type Product, type Category } from "@/lib/store";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("doce");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(getProducts());
    setCategories(getCategories());
  }, []);

  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-title text-[var(--color-ink)] mb-3">
          Nossos Produtos
        </h1>
        <p className="text-[var(--color-foreground-dark)] max-w-2xl mx-auto">
          Descubra nossa seleção especial de doces e salgados artesanais,
          preparados com ingredientes selecionados e muito carinho.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center gap-4 mb-10"
      >
        <button
          onClick={() => setActiveTab("doce")}
          className={`px-8 py-3 rounded-xl font-title text-lg transition-all duration-300 ${
            activeTab === "doce"
              ? "bg-[var(--color-primary)] text-white shadow-lg transform scale-105"
              : "bg-[var(--color-support)] text-[var(--color-foreground-dark)] hover:bg-[var(--color-primary)]/20"
          }`}
        >
          🍰 Doces
        </button>
        <button
          onClick={() => setActiveTab("salgado")}
          className={`px-8 py-3 rounded-xl font-title text-lg transition-all duration-300 ${
            activeTab === "salgado"
              ? "bg-[var(--color-primary)] text-white shadow-lg transform scale-105"
              : "bg-[var(--color-support)] text-[var(--color-foreground-dark)] hover:bg-[var(--color-primary)]/20"
          }`}
        >
          🥐 Salgados
        </button>
      </motion.div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-8 py-3 rounded-xl font-title text-lg transition-all duration-300 ${
              activeTab === category.id
                ? "bg-[var(--color-primary)] text-white shadow-lg transform scale-105"
                : "bg-[var(--color-support)] text-[var(--color-foreground-dark)] hover:bg-[var(--color-primary)]/20"
            }`}
          >
            {category.emoji} {category.name}
          </button>
        ))}
      </motion.div>