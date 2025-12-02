"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getProducts,
  saveProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  addCategory,
  deleteCategory,
  getBusinessHours,
  saveBusinessHours,
  type Product,
  type Category,
  type BusinessHours,
} from "@/lib/store";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<
    "products" | "categories" | "hours"
  >("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    weekday: "",
    saturday: "",
    sunday: "",
  });

  // Product Form
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    ingredients: "",
    image: "",
    category: "",
  });

  // Category Form
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    emoji: "",
  });

  // Load data
  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("dacoach_admin_auth");
    const timestamp = localStorage.getItem("dacoach_admin_timestamp");
    
    if (!auth || auth !== "true") {
      router.push("/admin/login");
      return;
    }

    // Check if session is expired (24 hours)
    if (timestamp) {
      const sessionAge = Date.now() - parseInt(timestamp);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (sessionAge > twentyFourHours) {
        handleLogout();
        return;
      }
    }

    setIsAuthenticated(true);
    setLoading(false);
    setProducts(getProducts());
    setCategories(getCategories());
    setBusinessHours(getBusinessHours());
  }, [router]);

  // Product handlers
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredientsArray = productForm.ingredients
      .split("\n")
      .filter((i) => i.trim());

    if (editingProduct) {
      updateProduct(editingProduct.id, {
        ...productForm,
        ingredients: ingredientsArray,
      });
    } else {
      addProduct({
        ...productForm,
        ingredients: ingredientsArray,
      });
    }

    setProducts(getProducts());
    resetProductForm();
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      ingredients: product.ingredients.join("\n"),
      image: product.image,
      category: product.category,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const resetProductForm = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      description: "",
      ingredients: "",
      image: "",
      category: "",
    });
  };

  // Category handlers
  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(categoryForm);
    setCategories(getCategories());
    setCategoryForm({ name: "", emoji: "" });
  };

  const handleDeleteCategory = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta categoria?")) {
      deleteCategory(id);
      setCategories(getCategories());
    }
  };

  // Hours handlers
  const handleHoursSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBusinessHours(businessHours);
    alert("Horário atualizado com sucesso!");
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("dacoach_admin_auth");
    localStorage.removeItem("dacoach_admin_timestamp");
    router.push("/admin/login");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg
            className="animate-spin h-12 w-12 text-[var(--color-primary)] mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-[var(--color-foreground-dark)]">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8 sm:py-12">

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <button
          onClick={() => setActiveSection("products")}
          className={`px-6 py-3 rounded-xl font-title transition-all duration-300 ${
            activeSection === "products"
              ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
              : "bg-white text-[var(--color-foreground-dark)] hover:bg-[var(--color-support)]"
          }`}
        >
          📦 Produtos
        </button>
        <button
          onClick={() => setActiveSection("categories")}
          className={`px-6 py-3 rounded-xl font-title transition-all duration-300 ${
            activeSection === "categories"
              ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
              : "bg-white text-[var(--color-foreground-dark)] hover:bg-[var(--color-support)]"
          }`}
        >
          🏷️ Categorias
        </button>
        <button
          onClick={() => setActiveSection("hours")}
          className={`px-6 py-3 rounded-xl font-title transition-all duration-300 ${
            activeSection === "hours"
              ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
              : "bg-white text-[var(--color-foreground-dark)] hover:bg-[var(--color-support)]"
          }`}
        >
          🕒 Horários
        </button>
      </motion.div>

      {/* Products Section */}
      {activeSection === "products" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-title text-[var(--color-primary)] mb-6">
                {editingProduct ? "Editar Produto" : "Adicionar Produto"}
              </h2>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Nome do Produto *
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) =>
                      setProductForm({ ...productForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                    placeholder="Ex: Brownie Fit"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Categoria *
                  </label>
                  <select
                    required
                    value={productForm.category}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.emoji} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Descrição *
                  </label>
                  <textarea
                    required
                    value={productForm.description}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors resize-none"
                    placeholder="Descreva o produto"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Ingredientes (um por linha) *
                  </label>
                  <textarea
                    required
                    value={productForm.ingredients}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        ingredients: e.target.value,
                      })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors resize-none"
                    placeholder="Farinha de trigo&#10;Açúcar&#10;Ovos"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    URL da Imagem *
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.image}
                    onChange={(e) =>
                      setProductForm({ ...productForm, image: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                    placeholder="/images/produto.svg"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-3 rounded-xl font-title hover:shadow-lg transition-all duration-300"
                  >
                    {editingProduct ? "Atualizar" : "Adicionar"}
                  </button>
                  {editingProduct && (
                    <button
                      type="button"
                      onClick={resetProductForm}
                      className="px-6 bg-gray-200 text-gray-700 py-3 rounded-xl font-title hover:bg-gray-300 transition-all duration-300"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Products List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-title text-[var(--color-ink)] mb-4">
                Produtos Cadastrados ({products.length})
              </h2>
              <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-title text-[var(--color-primary)] mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[var(--color-foreground-dark)] mb-2">
                          Categoria:{" "}
                          {categories.find((c) => c.id === product.category)
                            ?.name || product.category}
                        </p>
                        <p className="text-sm text-[var(--color-foreground-dark)] line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Editar"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          title="Excluir"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Categories Section */}
      {activeSection === "categories" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Category Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-title text-[var(--color-primary)] mb-6">
                Adicionar Categoria
              </h2>
              <form onSubmit={handleCategorySubmit} className="space-y-4">
                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Nome da Categoria *
                  </label>
                  <input
                    type="text"
                    required
                    value={categoryForm.name}
                    onChange={(e) =>
                      setCategoryForm({ ...categoryForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                    placeholder="Ex: Bebidas"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                    Emoji *
                  </label>
                  <input
                    type="text"
                    required
                    value={categoryForm.emoji}
                    onChange={(e) =>
                      setCategoryForm({
                        ...categoryForm,
                        emoji: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                    placeholder="🥤"
                    maxLength={2}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-3 rounded-xl font-title hover:shadow-lg transition-all duration-300"
                >
                  Adicionar Categoria
                </button>
              </form>
            </div>

            {/* Categories List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-title text-[var(--color-ink)] mb-4">
                Categorias Cadastradas ({categories.length})
              </h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.emoji}</span>
                      <div>
                        <h3 className="text-lg font-title text-[var(--color-primary)]">
                          {category.name}
                        </h3>
                        <p className="text-sm text-[var(--color-foreground-dark)]">
                          ID: {category.id}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      title="Excluir"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Business Hours Section */}
      {activeSection === "hours" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-title text-[var(--color-primary)] mb-6">
              Horários de Funcionamento
            </h2>
            <form onSubmit={handleHoursSubmit} className="space-y-4">
              <div>
                <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                  Segunda a Sexta *
                </label>
                <input
                  type="text"
                  required
                  value={businessHours.weekday}
                  onChange={(e) =>
                    setBusinessHours({
                      ...businessHours,
                      weekday: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="Ex: 8h às 18h"
                />
              </div>

              <div>
                <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                  Sábado *
                </label>
                <input
                  type="text"
                  required
                  value={businessHours.saturday}
                  onChange={(e) =>
                    setBusinessHours({
                      ...businessHours,
                      saturday: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="Ex: 8h às 14h"
                />
              </div>

              <div>
                <label className="block text-[var(--color-foreground-dark)] font-medium mb-2">
                  Domingo *
                </label>
                <input
                  type="text"
                  required
                  value={businessHours.sunday}
                  onChange={(e) =>
                    setBusinessHours({
                      ...businessHours,
                      sunday: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-support)] focus:border-[var(--color-primary)] outline-none transition-colors"
                  placeholder="Ex: Fechado"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-4 rounded-xl font-title text-lg hover:shadow-lg transition-all duration-300"
              >
                Salvar Horários
              </button>
            </form>

            {/* Preview */}
            <div className="mt-8 p-6 bg-[var(--color-support)] rounded-2xl">
              <h3 className="font-title text-[var(--color-primary)] mb-4">
                Prévia
              </h3>
              <div className="space-y-2 text-[var(--color-foreground-dark)]">
                <p>
                  <strong>Segunda a Sexta:</strong> {businessHours.weekday}
                </p>
                <p>
                  <strong>Sábado:</strong> {businessHours.saturday}
                </p>
                <p>
                  <strong>Domingo:</strong> {businessHours.sunday}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
