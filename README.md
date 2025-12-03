# 🎂 daCoach Confeitaria Fina

<div align="center">

![daCoach Confeitaria](public/logo.svg)

**Confeitaria artesanal com atenção ao detalhe — opções fit e tradicionais pensadas para ocasiões especiais ou para o dia a dia.**

[🌐 Website](#) • [📱 WhatsApp](#) • [📸 Instagram](#)

</div>

---

## 📖 Sobre o Projeto | About the Project

### 🇧🇷 Português

Website institucional da **daCoach Confeitaria Fina**, desenvolvido com as mais modernas tecnologias web para proporcionar uma experiência elegante e responsiva. O projeto apresenta o portfólio de produtos, permite gestão administrativa e facilita o contato direto via WhatsApp.

#### ✨ Funcionalidades Principais

- 🏠 **Página Inicial**: Apresentação dos serviços e categorias
- 🛍️ **Catálogo de Produtos**: Navegação por categorias (Doces, Salgados)
- ℹ️ **Sobre Nós**: História e valores da confeitaria
- 📞 **Contato**: Integração direta com WhatsApp
- 🔐 **Painel Administrativo**: Gerenciamento de produtos, categorias e horários
- 📱 **Design Responsivo**: Otimizado para mobile, tablet e desktop
- ⚡ **Performance**: Carregamento rápido com Next.js 16 e Turbopack

---

### 🇺🇸 English

Institutional website for **daCoach Confeitaria Fina**, built with cutting-edge web technologies to deliver an elegant and responsive experience. The project showcases the product portfolio, enables administrative management, and facilitates direct contact via WhatsApp.

#### ✨ Key Features

- 🏠 **Homepage**: Service and category presentation
- 🛍️ **Product Catalog**: Category-based navigation (Sweets, Savories)
- ℹ️ **About Us**: Bakery history and values
- 📞 **Contact**: Direct WhatsApp integration
- 🔐 **Admin Panel**: Product, category, and hours management
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Fast loading with Next.js 16 and Turbopack

---

## 🚀 Tecnologias | Technologies

### Core Stack

- **[Next.js 16.0.5](https://nextjs.org/)** - React framework com App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas

### DevOps & Tools

- **[Turbopack](https://turbo.build/)** - Ultra-fast bundler
- **[ESLint](https://eslint.org/)** - Code linting
- **[React Compiler](https://react.dev/learn/react-compiler)** - Otimização automática

---

## 📦 Instalação | Installation

### 🇧🇷 Português

```bash
# Clone o repositório
git clone https://github.com/bmulim/dacoach-confeitariafina.git

# Acesse o diretório
cd dacoach-confeitariafina

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

### 🇺🇸 English

```bash
# Clone the repository
git clone https://github.com/bmulim/dacoach-confeitariafina.git

# Navigate to directory
cd dacoach-confeitariafina

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your settings

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Variáveis de Ambiente | Environment Variables

Crie um arquivo `.env.local` na raiz do projeto | Create a `.env.local` file in the root:

```env
# WhatsApp Integration
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

# Admin Access
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

---

## 📜 Scripts Disponíveis | Available Scripts

```bash
# Desenvolvimento | Development
npm run dev

# Build de produção | Production build
npm run build

# Iniciar produção | Start production
npm start

# Linting
npm run lint
```

---

## 🏗️ Estrutura do Projeto | Project Structure

```
dacoach-confeitariafina/
├── public/              # Arquivos estáticos | Static files
│   ├── logo.svg
│   └── images/         # Imagens de produtos | Product images
├── src/
│   ├── app/            # App Router (Next.js 16)
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # Sobre nós | About
│   │   ├── products/          # Catálogo | Catalog
│   │   ├── contact/           # Contato | Contact
│   │   └── admin/             # Painel admin | Admin panel
│   ├── components/     # Componentes reutilizáveis | Reusable components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── CardsGrid/
│   │   ├── ProductCard/
│   │   └── ProductModal/
│   ├── lib/            # Utilidades | Utilities
│   │   └── store.ts           # Gerenciamento de dados | Data management
│   └── @types/         # TypeScript types
└── package.json
```

---

## 🎨 Design System

### Paleta de Cores | Color Palette

```css
--color-primary: #D4A574      /* Dourado suave | Soft gold */
--color-secondary: #E8C9A8    /* Bege claro | Light beige */
--color-support: #F5E6D3      /* Creme | Cream */
--color-ink: #3E3E3E          /* Cinza escuro | Dark gray */
--color-foreground-dark: #666 /* Cinza médio | Medium gray */
```

### Tipografia | Typography

- **Heading**: Playfair Display (elegante, serifada)
- **Body**: Inter (moderna, sans-serif)

---

## 🔐 Painel Administrativo | Admin Panel

### 🇧🇷 Acesso

1. Acesse `/admin`
2. Digite a senha configurada em `NEXT_PUBLIC_ADMIN_PASSWORD`
3. Gerencie produtos, categorias e horários de funcionamento

### 🇺🇸 Access

1. Navigate to `/admin`
2. Enter the password set in `NEXT_PUBLIC_ADMIN_PASSWORD`
3. Manage products, categories, and business hours

---

## 📱 Integração WhatsApp | WhatsApp Integration

O site possui integração automática com WhatsApp para facilitar o contato. Configure o número no arquivo `.env.local`:

The website features automatic WhatsApp integration for easy contact. Set the number in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

---

## 🚀 Deploy

### Vercel (Recomendado | Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bmulim/dacoach-confeitariafina)

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

---

### Outras Plataformas | Other Platforms

```bash
# Build de produção | Production build
npm run build

# Iniciar servidor | Start server
npm start
```

---

## 🤝 Contribuindo | Contributing

### 🇧🇷 Português

Contribuições são bem-vindas! Para mudanças importantes:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

### 🇺🇸 English

Contributions are welcome! For major changes:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 Licença | License

Este projeto é privado e pertence à **daCoach Confeitaria Fina**.

This project is private and belongs to **daCoach Confeitaria Fina**.

---

## 👨‍💻 Desenvolvido por | Developed by

**Bruno Mulim** - [@bmulim](https://github.com/bmulim)

---

## 📞 Contato | Contact

- 🌐 Website: [dacoach-confeitariafina.vercel.app](#)
- 📱 WhatsApp: [+55 11 99999-9999](#)
- 📧 Email: contato@dacoach.com.br
- 📸 Instagram: [@dacoach_confeitaria](#)

---

<div align="center">

**Feito com ❤️ e muito açúcar | Made with ❤️ and lots of sugar**

⭐ Se você gostou deste projeto, considere dar uma estrela!

⭐ If you liked this project, consider giving it a star!

</div>
