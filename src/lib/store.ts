// Shared data store using localStorage

export interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export interface BusinessHours {
  weekday: string;
  saturday: string;
  sunday: string;
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Brownie Fit",
    description:
      "Brownie denso e úmido feito com cacau 70%, adoçante natural e farinha de amêndoas. Uma explosão de chocolate com menos calorias.",
    ingredients: [
      "Farinha de amêndoas",
      "Cacau em pó 70%",
      "Adoçante eritritol",
      "Ovos",
      "Óleo de coco",
      "Essência de baunilha",
    ],
    image: "/images/7be2fc40-94ed-47f5-8613-6e5789ba4506.png",
    category: "doce",
  },
  {
    id: "2",
    name: "Bolo Red Velvet",
    description:
      "Clássico bolo vermelho aveludado com cobertura de cream cheese. Suave, úmido e irresistível para ocasiões especiais.",
    ingredients: [
      "Farinha de trigo",
      "Açúcar refinado",
      "Cacau em pó",
      "Corante vermelho natural",
      "Leitelho",
      "Cream cheese",
      "Manteiga",
    ],
    image: "/images/c788f967-8d95-422b-9603-24e560df3546.png",
    category: "doce",
  },
  {
    id: "3",
    name: "Mini Cheesecake",
    description:
      "Pequenas delícias de cheesecake com base crocante de biscoito e cobertura de frutas vermelhas. Perfeitas para degustação.",
    ingredients: [
      "Cream cheese",
      "Biscoito maisena",
      "Manteiga",
      "Açúcar",
      "Ovos",
      "Frutas vermelhas",
      "Gelatina incolor",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_24_45.png",
    category: "doce",
  },
  {
    id: "4",
    name: "Torta de Limão",
    description:
      "Torta com massa amanteigada, recheio cremoso de limão siciliano e merengue italiano levemente dourado. Equilíbrio perfeito entre doce e azedo.",
    ingredients: [
      "Farinha de trigo",
      "Manteiga",
      "Limão siciliano",
      "Leite condensado",
      "Ovos",
      "Açúcar",
      "Creme de leite",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_27_36.png",
    category: "doce",
  },
  {
    id: "5",
    name: "Cookie Integral",
    description:
      "Cookies crocantes por fora e macios por dentro, feitos com aveia, mel e gotas de chocolate meio amargo. Opção fit deliciosa.",
    ingredients: [
      "Aveia em flocos",
      "Farinha integral",
      "Mel",
      "Chocolate meio amargo",
      "Manteiga de amendoim",
      "Ovos",
      "Canela",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_29_25.png",
    category: "doce",
  },
  {
    id: "6",
    name: "Macarons Franceses",
    description:
      "Delicados macarons com casquinha crocante e recheio cremoso. Disponíveis em sabores: pistache, framboesa, chocolate e baunilha.",
    ingredients: [
      "Farinha de amêndoas",
      "Açúcar de confeiteiro",
      "Claras de ovos",
      "Açúcar refinado",
      "Ganache de chocolate",
      "Corantes naturais",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_31_55.png",
    category: "doce",
  },
  {
    id: "7",
    name: "Quiche de Espinafre",
    description:
      "Quiche com massa folhada crocante e recheio cremoso de espinafre, queijo e nozes. Perfeita para um brunch elegante.",
    ingredients: [
      "Massa folhada",
      "Espinafre fresco",
      "Queijo gruyère",
      "Ovos",
      "Creme de leite",
      "Nozes",
      "Noz-moscada",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_34_42.png",
    category: "salgado",
  },
  {
    id: "8",
    name: "Mini Empada de Frango",
    description:
      "Empadinhas crocantes com recheio de frango desfiado temperado com azeitonas e creme de queijo. Ideais para festas.",
    ingredients: [
      "Farinha de trigo",
      "Manteiga",
      "Peito de frango",
      "Requeijão",
      "Azeitonas",
      "Cebola",
      "Temperos naturais",
    ],
    image: "/images/ChatGPT Image 2 de dez. de 2025, 16_25_46.png",
    category: "salgado",
  },
  {
    id: "9",
    name: "Pão de Queijo Mineiro",
    description:
      "Autêntico pão de queijo com casquinha dourada e interior macio. Feito com polvilho azedo e queijo minas curado.",
    ingredients: [
      "Polvilho azedo",
      "Queijo minas curado",
      "Leite",
      "Óleo",
      "Ovos",
      "Sal",
    ],
    image: "/images/ChatGPT Image 2 de dez. de 2025, 17_09_44.png",
    category: "salgado",
  },
  {
    id: "10",
    name: "Torta Salgada Integral",
    description:
      "Torta com massa integral leve e recheio de legumes grelhados, ricota e ervas finas. Opção saudável e saborosa.",
    ingredients: [
      "Farinha integral",
      "Azeite de oliva",
      "Abobrinha",
      "Berinjela",
      "Tomate seco",
      "Ricota",
      "Manjericão",
    ],
    image: "/images/ChatGPT Image 2 de dez. de 2025, 17_50_27.png",
    category: "salgado",
  },
  {
    id: "11",
    name: "Esfiha Aberta",
    description:
      "Esfiha de massa fininha com recheio suculento de carne temperada, cebola e tomate. Sabor autêntico da culinária árabe.",
    ingredients: [
      "Farinha de trigo",
      "Fermento biológico",
      "Carne moída",
      "Cebola",
      "Tomate",
      "Hortelã",
      "Limão",
    ],
    image: "/images/ChatGPT Image 1 de dez. de 2025, 23_24_45s.png",
    category: "salgado",
  },
  {
    id: "12",
    name: "Canapé Gourmet",
    description:
      "Mini canapés variados com torradas crocantes e coberturas sofisticadas: salmão defumado, queijo brie e geleias artesanais.",
    ingredients: [
      "Pão de forma integral",
      "Salmão defumado",
      "Queijo brie",
      "Cream cheese",
      "Geleia de pimenta",
      "Rúcula",
    ],
    image: "/images/7be2fc40-94ed-47f5-8613-6e5789ba4506.png",
    category: "salgado",
  },
];

const DEFAULT_CATEGORIES: Category[] = [
  { id: "doce", name: "Doces", emoji: "🍰" },
  { id: "salgado", name: "Salgados", emoji: "🥐" },
];

const DEFAULT_HOURS: BusinessHours = {
  weekday: "8h às 18h",
  saturday: "8h às 14h",
  sunday: "Fechado",
};

// Products
export const getProducts = (): Product[] => {
  if (typeof window === "undefined") return DEFAULT_PRODUCTS;
  const stored = localStorage.getItem("dacoach_products");
  return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS;
};

export const saveProducts = (products: Product[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("dacoach_products", JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, "id">): void => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString(),
  };
  saveProducts([...products, newProduct]);
};

export const updateProduct = (id: string, product: Partial<Product>): void => {
  const products = getProducts();
  const updated = products.map((p) => (p.id === id ? { ...p, ...product } : p));
  saveProducts(updated);
};

export const deleteProduct = (id: string): void => {
  const products = getProducts();
  saveProducts(products.filter((p) => p.id !== id));
};

// Categories
export const getCategories = (): Category[] => {
  if (typeof window === "undefined") return DEFAULT_CATEGORIES;
  const stored = localStorage.getItem("dacoach_categories");
  return stored ? JSON.parse(stored) : DEFAULT_CATEGORIES;
};

export const saveCategories = (categories: Category[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("dacoach_categories", JSON.stringify(categories));
};

export const addCategory = (category: Omit<Category, "id">): void => {
  const categories = getCategories();
  const newCategory = {
    ...category,
    id: category.name.toLowerCase().replace(/\s+/g, "-"),
  };
  saveCategories([...categories, newCategory]);
};

export const deleteCategory = (id: string): void => {
  const categories = getCategories();
  saveCategories(categories.filter((c) => c.id !== id));
};

// Business Hours
export const getBusinessHours = (): BusinessHours => {
  if (typeof window === "undefined") return DEFAULT_HOURS;
  const stored = localStorage.getItem("dacoach_hours");
  return stored ? JSON.parse(stored) : DEFAULT_HOURS;
};

export const saveBusinessHours = (hours: BusinessHours): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("dacoach_hours", JSON.stringify(hours));
};
