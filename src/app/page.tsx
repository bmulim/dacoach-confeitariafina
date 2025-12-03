import Hero from "../components/Hero";
import CardsGrid from "../components/CardsGrid";

export default function HomePage() {
  const items = [
    {
      title: "Doces Fit",
      text: "Sobremesas com ingredientes mais leves, baixo açúcar e muita delicadeza — ideais para quem quer sabor sem culpa.",
      imgSrc: "/images/ChatGPT Image 1 de dez. de 2025, 23_29_25.png",
      imgAlt: "Doces fit",
    },
    {
      title: "Confeitaria Tradicional",
      text: "Receitas clássicas e requintadas, bolos e tortas preparados com técnica e carinho para ocasiões especiais.",
      imgSrc: "/images/c788f967-8d95-422b-9603-24e560df3546.png",
      imgAlt: "Confeitaria tradicional",
    },
    {
      title: "Mini Delícias",
      text: "Pequenas porções para eventos, mesas de festa ou para a sua degustação pessoal — perfeitas para provar um pouco de tudo.",
      imgSrc: "/images/ChatGPT Image 1 de dez. de 2025, 23_24_45.png",
      imgAlt: "Mini delícias",
    },
    {
      title: "Comidas Saudáveis",
      text: "Opções saborosas e nutritivas, preparadas com ingredientes frescos e equilibrados — perfeitas para quem busca bem-estar sem abrir mão do sabor.",
      imgSrc: "/images/ChatGPT Image 2 de dez. de 2025, 17_50_27.png",
      imgAlt: "Comidas saudáveis",
    },
  ];

  return (
    <main className="max-w-[1100px] mx-auto px-4 py-8 sm:py-12">
      {/* build whatsapp CTA: uses NEXT_PUBLIC_WHATSAPP_NUMBER when available */}
      {/*
          message template can be edited by you. If you set NEXT_PUBLIC_WHATSAPP_NUMBER
          in your environment (digits only, e.g. 5511999999999) the link will open a chat
          with that number. Otherwise it will open the generic share URL.
        */}
      <Hero
        title="Confeitaria Fina"
        description={`Confeitaria artesanal com atenção ao detalhe — opções fit e tradicionais pensadas para ocasiões especiais ou para o dia a dia. Sabores delicados, acabamentos elegantes.`}
        ctaLabel="Peça um orçamento"
        imgSrc="/images/ChatGPT Image 1 de dez. de 2025, 23_31_55.png"
        imgClassName="right-4 top-4 opacity-80 hidden sm:block w-40 h-28"
        className="header-animated-bg rounded-2xl p-6 sm:p-10 relative overflow-visible shadow-lg border border-[var(--color-border)]"
        titleClassName="text-3xl sm:text-4xl font-title text-[var(--color-ink)]"
        descClassName="mt-3 text-sm sm:text-base text-[var(--color-foreground-dark)] max-w-[720px] mx-auto"
        ctaClassName="btn-primary font-semibold"
        whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
        messageTemplate={
          "Olá, meu nome é {name}. Gostaria de pedir um orçamento para daCoach. Poderia me informar preços e disponibilidade?"
        }
        promptForName={true}
      />

      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-title text-[var(--color-ink)] text-center mb-8">
          Nossos Serviços
        </h2>
        <CardsGrid items={items} cardClassName="" />
      </div>
    </main>
  );
}
