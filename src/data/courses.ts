export const WA = "351938434595";
export const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export type Day = { n: string; title: string; items: string[] };

export type Course = {
  slug: string;
  badge: string;
  title: string;
  titleEm: string;
  short: string;
  level: string;
  price: string;
  priceNote: string;
  deposit: string;
  cover: string;
  cardImage: string;
  facts: string[];
  intro: string;
  metaTitle: string;
  metaDescription: string;
  highlights?: { title: string; sub: string }[];
  delivers: { title: string; items: string[] };
  days: Day[];
  gallery: { src: string; alt: string; wide?: boolean }[];
  kit: { title: string; note?: string; items: string[] };
  bonus?: string[];
  info?: string[];
};

export const courses: Course[] = [
  {
    slug: "fio-a-fio",
    badge: "Iniciante",
    title: "Fio a Fio",
    titleEm: "& Volumes Tecnológicos",
    short: "Fio a Fio & Volumes Tecnológicos",
    level: "2 dias · 16 horas",
    price: "690€",
    priceNote: "Aos valores acresce IVA à taxa legal em vigor, quando aplicável.",
    deposit: "100€",
    cover: "/images/fio-3.jpg",
    cardImage: "/images/fio-1.jpg",
    facts: ["2 dias · 16h", "10h às 18h", "Amadora", "Kit aluno incluído"],
    intro:
      "Curso destinado a quem não possui nenhuma experiência: é a inicialização da técnica de Fio a Fio Clássico e Volumes Tecnológicos. Abordamos temas iniciantes e avançados, com os efeitos Fio a Fio, Volume Brasileiro, Volume Egípcio, Volume Soft, 5D e 6D.",
    metaTitle: "Curso Fio a Fio & Volumes Tecnológicos — Jhemilly Vieira",
    metaDescription:
      "Formação presencial de extensão de pestanas do zero em Amadora: Fio a Fio Clássico e Volumes Tecnológicos, 16h em 2 dias, kit aluno e certificado. 690€.",
    highlights: [
      { title: "6 efeitos", sub: "Fio a Fio, Brasileiro, Egípcio, Soft, 5D e 6D" },
      { title: "2 formadoras", sub: "Turmas acima de 4 alunas têm sempre apoio duplo" },
    ],
    delivers: {
      title: "O que esta formação te entrega",
      items: [
        "Apresentação da técnica e melhores materiais",
        "Curvaturas, espessuras e tipos de fios",
        "Mappings, visagismo e camadas",
        "Distância, direcionamento e MicroDrop",
        "Propriedades do adesivo e PH de cada produto",
        "Retenção sem mistérios e intercorrências",
        "Postura profissional, como fotografar e lentes",
        "Certificado e avaliação individual",
      ],
    },
    days: [
      {
        n: "1",
        title: "Primeiro dia · Teoria",
        items: [
          "Apresentação da técnica e melhores materiais",
          "Curvaturas, espessuras, mappings e visagismo",
          "Camadas, distância e direcionamento",
          "MicroDrop, adesivo, tipos de fios e PH",
          "Retenção sem mistérios e intercorrências",
        ],
      },
      {
        n: "2",
        title: "Segundo dia · Prática",
        items: [
          "Prática em boneca e esponja",
          "Prática em modelo real (modelo às 10h30)",
          "Postura profissional",
          "Como fotografar e lentes",
          "Entrega dos certificados e avaliação individual",
        ],
      },
    ],
    gallery: [
      { src: "/images/fio-1.jpg", alt: "Aplicação de extensão de pestanas em modelo", wide: true },
      { src: "/images/fio-3.jpg", alt: "Alunas em prática durante a formação" },
      { src: "/images/fio-2.jpg", alt: "Jhemilly Vieira em aula teórica" },
      { src: "/images/fio-turma.jpg", alt: "Turma de alunas com os certificados", wide: true },
    ],
    kit: {
      title: "Kit aluno",
      note: "Pensado no pós-curso, para que a aluna consiga praticar logo após a formação.",
      items: [
        "Escovinhas",
        "Lip brush",
        "Flor",
        "Patches",
        "Hand pallet",
        "Pinça Frubel",
        "Pinça Ruby",
        "Fita",
        "1 cx mix Volume BR",
        "1 cx mix Fio a Fio",
        "1 cx mix Volume Egípcio",
        "Adesivo",
        "Caneta mapping",
        "Garrafa de lavagem",
        "Ventoinha",
      ],
    },
    bonus: [
      "Acesso imediato à lista de fornecedores com links de todos os materiais usados na academia",
      "Acompanhamento pós-curso no grupo de alunos",
    ],
    info: [
      "Carga horária de 16h dividida em 2 dias: o primeiro teórico, o segundo prático.",
      "Iniciamos às 10h e finalizamos às 18h — o horário pode estender-se no segundo dia.",
      "Cada aluna é responsável pela sua modelo, que vai no segundo dia às 10h30.",
      "Endereço: Praceta Notícias da Amadora 5B, Casal de São Brás, Amadora, 2700-606.",
    ],
  },
  {
    slug: "m7",
    badge: "Premium",
    title: "M7",
    titleEm: "Método Sete Pilares",
    short: "M7 · Método Sete Pilares",
    level: "3 dias · Técnica & posicionamento",
    price: "750€",
    priceNote: "Os valores não incluem IVA. Cartão ou Klarna incluem taxa de 6%.",
    deposit: "100€",
    cover: "/images/m7-cover.jpg",
    cardImage: "/images/jhemilly-palco.jpg",
    facts: ["3 dias", "10h às 18h", "Lisboa", "Volume Russo & Mega"],
    intro:
      "Técnica, marketing e posicionamento num só treinamento. Um método completo para a profissional que já trabalha com pestanas e quer alinhar a técnica, destacar-se no mercado, vender mais e construir uma marca vista exatamente como almeja.",
    metaTitle: "M7 · Método Sete Pilares — Especialização com Jhemilly Vieira",
    metaDescription:
      "Especialização de 3 dias em Volume Russo e Mega + os 7 pilares de crescimento exponencial: conteúdo, copy, vendas, marca e gestão. 750€ em Lisboa.",
    highlights: [
      { title: "Técnica", sub: "Volume Russo, Mega, leques fita e finger" },
      { title: "Negócio", sub: "7 pilares de crescimento exponencial" },
    ],
    delivers: {
      title: "O método",
      items: [
        "Alinhamento da técnica",
        "Como se destacar no mercado",
        "Como vender e como fidelizar",
        "Gestão de equipa e delegação",
        "Como entregar excelência",
        "Imagem pessoal e marca",
        "Produção de conteúdo estratégica para as redes sociais",
      ],
    },
    days: [
      {
        n: "1",
        title: "Dia 01 · 10h às 18h · Especialização na técnica",
        items: [
          "Volume Russo e Mega",
          "Leques nas técnicas fita e finger",
          "Efeitos e tendências: Wispy, Kim K, Wet Effect, Fox e Lami",
          "Durabilidade: retenção, acoplagem, PH e adesivo",
        ],
      },
      {
        n: "2",
        title: "Dia 02 · 10h às 18h · Prática",
        items: ["Prática em modelo real", "Técnica realizada à escolha da aluna"],
      },
      {
        n: "3",
        title: "Dia 03 · 7 pilares de um crescimento exponencial",
        items: [
          "Funil e pirâmide de conteúdo · tipos de conteúdo",
          "Estruturação de perfil · copy e narrativas",
          "Storytelling e vendas · qualificação de audiência",
          "Posicionamento de imagem e marca",
          "Gestão e delegação · serviço ou experiência?",
          "Desejo e mentalidade: trate a sua empresa como empresa",
        ],
      },
    ],
    gallery: [
      { src: "/images/jhemilly-palco.jpg", alt: "Jhemilly Vieira em palco durante formação", wide: true },
      { src: "/images/fio-2.jpg", alt: "Aula de posicionamento e marketing" },
      { src: "/images/fio-3.jpg", alt: "Alunas em prática de volume" },
      { src: "/images/fio-turma.jpg", alt: "Turma formada pelo método M7", wide: true },
    ],
    kit: {
      title: "Bónus incluídos",
      items: [
        "70% OFF no Ebook Wispy com 48 lash mappings",
        "01 pinça JV Collection à escolha (sujeito a stock)",
        "Imagem: como editar, fotografar e preparar cenário e modelos",
        "Manual de Especialização em Volume e Efeitos",
        "Cartão digital com acesso a todos os fornecedores",
        "Acesso ilimitado ao grupo de apoio",
        "Indicação de lentes e técnicas de fotografia e vídeo",
      ],
    },
    info: [
      "Reserva de vaga por MB WAY ou transferência imediata: 100€.",
      "Por Klarna ou cartão de crédito: 100€ + 6% de taxa.",
      "O restante valor é quitado no primeiro dia do treinamento.",
    ],
  },
  {
    slug: "bloom-lips",
    badge: "Expert",
    title: "Bloom Lips",
    titleEm: "Micropigmentação Labial",
    short: "Bloom Lips · Micropigmentação Labial",
    level: "3 dias · 3 técnicas",
    price: "1.290€",
    priceNote: "Aos valores acresce IVA à taxa legal em vigor, quando aplicável.",
    deposit: "150€",
    cover: "/images/bloom-aula.jpg",
    cardImage: "/images/bloom-tec-1.jpg",
    facts: ["3 dias", "3 técnicas", "2 modelos práticos", "Dermógrafo incluído"],
    intro:
      "Técnica desenvolvida exclusivamente por Jhemilly Vieira, inspirada nos Lábios Russos, com destaque no formato, design e contorno labial. Proporciona preenchimento uniforme, correção de assimetrias e a criação de um lábio harmónico, delicado e delimitado com precisão.",
    metaTitle: "Bloom Lips — Formação de Micropigmentação Labial em Lisboa",
    metaDescription:
      "Torne-se expert em micropigmentação labial: 3 técnicas (Bloom Lips, Soft Bloom e neutralização), 3 dias, 2 modelos práticos e dermógrafo incluído. 1.290€.",
    highlights: [
      { title: "3 técnicas", sub: "Bloom Lips, Soft Bloom e neutralização de lábios escuros" },
      { title: "3 efeitos", sub: "Três movimentos de implantação num só curso" },
    ],
    delivers: {
      title: "O que esta formação te entrega",
      items: [
        "Anatomia e fisiologia dos lábios",
        "Correção de assimetrias, contorno e delimitação",
        "Enfermidades labiais e contraindicações",
        "Colorimetria simples e tipos de lâminas labiais",
        "Materiais e suas funcionalidades",
        "3 movimentos de implantação · 3 efeitos num só curso",
        "Anamnese e preparação pré-procedimento",
        "Processo de cicatrização",
        "Realização de 2 modelos práticos",
      ],
    },
    days: [
      {
        n: "1",
        title: "Dia 1",
        items: [
          "Aula de marketing, Instagram e atualização da câmara",
          "Teoria e treino de design labial",
        ],
      },
      {
        n: "2",
        title: "Dia 2",
        items: [
          "Demonstração ao vivo em modelo real",
          "Prática em EVA, pele sintética e colorimetria",
        ],
      },
      {
        n: "3",
        title: "Dia 3",
        items: [
          "Prática em modelo real — 10h30 primeira modelo, 15h30 segunda modelo",
          "Entrega dos certificados",
        ],
      },
    ],
    gallery: [
      { src: "/images/bloom-tec-1.jpg", alt: "Resultado Bloom Lips em lábios" },
      { src: "/images/bloom-tec-2.jpg", alt: "Efeito Soft Bloom" },
      { src: "/images/bloom-tec-3.jpg", alt: "Contorno e design labial" },
      { src: "/images/bloom-lips-1.jpg", alt: "Detalhe de micropigmentação labial" },
      { src: "/images/bloom-aula.jpg", alt: "Aula prática de micropigmentação labial", wide: true },
    ],
    kit: {
      title: "Kit aluno",
      note: "A academia fornece todos os materiais necessários. A modelo é responsabilidade da aluna.",
      items: [
        "Apostila de estudo",
        "Guia das técnicas incluso",
        "Dermógrafo",
        "1 cx agulhas 0,30 1RL",
        "Descartáveis e acessórios",
      ],
    },
    bonus: [
      "Marketing direcionado às redes sociais",
      "Demonstração de como preparar a modelo para fotografia",
      "Demonstração e acessórios para fotografar",
      "Postura profissional",
    ],
    info: [
      "Para realizar a inscrição é necessário o depósito de 150€ para garantir a vaga.",
      "Junto com o valor, envie o nome como quer no certificado, o seu contacto e um número de emergência.",
      "Opção de pagamento parcelado Klarna ou cartão de crédito + 6% no valor total.",
    ],
  },
];

export const RULES = [
  "O valor restante do curso é quitado no dia do curso, antes do início da aula.",
  "Procure não se atrasar para melhor aproveitamento de todo o conteúdo.",
  "Em caso de não comparecimento por qualquer motivo, o valor da inscrição não é reembolsado.",
  "Caso não possa comparecer, avise com no mínimo 15 dias de antecedência: será transferida para a próxima turma.",
  "Em caso de imprevisto por parte da escola, os valores já pagos são reembolsados ou transferidos.",
  "O valor da inscrição não pode ser utilizado para outros fins ou por outras pessoas.",
  "A transferência de turma tem o prazo de 6 meses, sujeita à atualização dos valores em vigor.",
  "Ao inscrever-se, concorda com todas as informações descritas acima.",
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug)!;
