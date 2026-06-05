export interface RoomStyle {
  id: string;
  name: {
    es: string;
    pt: string;
    en: string;
  };
  description: {
    es: string;
    pt: string;
    en: string;
  };
  imageUrl: string;
}

const ROOM_STYLES: RoomStyle[] = [
  {
    id: 'moderno',
    name: {
      es: 'Moderno',
      pt: 'Moderno',
      en: 'Modern',
    },
    description: {
      es: 'Líneas limpias, paleta de colores neutros y un enfoque en la funcionalidad con materiales como el metal, vidrio y acero.',
      pt: 'Linhas limpas, paleta de cores neutras e foco na funcionalidade com materiais como metal, vidro e aço.',
      en: 'Clean lines, a neutral color palette, and a focus on functionality featuring materials like metal, glass, and steel.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'contemporaneo',
    name: {
      es: 'Contemporáneo',
      pt: 'Contemporâneo',
      en: 'Contemporary',
    },
    description: {
      es: 'Estilo que evoluciona con el presente; combina líneas suaves, espacios abiertos y una mezcla de texturas actuales.',
      pt: 'Estilo que evolui com o presente; combina linhas suaves, espaços abertos e uma mistura de texturas atuais.',
      en: 'A style that evolves with the present; it combines smooth lines, open spaces, and a blend of current textures.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tradicional',
    name: {
      es: 'Tradicional',
      pt: 'Tradicional',
      en: 'Traditional',
    },
    description: {
      es: 'Inspirado en el diseño clásico europeo, con muebles detallados, maderas oscuras, simetría y textiles ricos.',
      pt: 'Inspirado no design clássico europeu, com móveis detalhados, madeiras escuras, simetria e têxteis ricos.',
      en: 'Inspired by classic European design, featuring detailed furniture, dark woods, symmetry, and rich textiles.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'escandinavo',
    name: {
      es: 'Escandinavo',
      pt: 'Escandinavo',
      en: 'Scandinavian',
    },
    description: {
      es: 'Luminoso y aireado, prioriza la funcionalidad, las maderas claras, los tonos blancos y los textiles acogedores.',
      pt: 'Luminoso e arejado, prioriza a funcionalidade, madeiras claras, tons de branco e têxteis aconchegantes.',
      en: 'Bright and airy, prioritizing functionality, light woods, white tones, and cozy textiles.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mediterraneo',
    name: {
      es: 'Mediterráneo',
      pt: 'Mediterrâneo',
      en: 'Mediterranean',
    },
    description: {
      es: 'Frescura costera con paredes de estuco, tonos tierra, azules, azulejos artesanales y vigas de madera expuestas.',
      pt: 'Frescor costeiro com paredes de estuque, tons de terra, azuis, azulejos artesanais e vigas de madeira expostas.',
      en: 'Coastal freshness featuring stucco walls, earth tones, blues, handcrafted tiles, and exposed wooden beams.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'minimalista',
    name: {
      es: 'Minimalista',
      pt: 'Minimalista',
      en: 'Minimalist',
    },
    description: {
      es: "El concepto de 'menos es más'. Formas puras, ausencia de ornamentación innecesaria y paletas monocromáticas.",
      pt: "O conceito de 'menos é mais'. Formas puras, ausência de ornamentação desnecessária e paletas monocromáticas.",
      en: "The 'less is more' concept. Pure forms, absence of unnecessary ornamentation, and monochromatic palettes.",
    },
    imageUrl:
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'transicional',
    name: {
      es: 'Transicional',
      pt: 'Transicional',
      en: 'Transitional',
    },
    description: {
      es: 'Un balance perfecto que combina la elegancia tradicional con las líneas limpias del diseño contemporáneo.',
      pt: 'Um equilíbrio perfeito que combina a elegância tradicional com as linhas limpas do design contemporâneo.',
      en: 'A perfect balance that blends traditional elegance with the clean lines of contemporary design.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'industrial',
    name: {
      es: 'Industrial',
      pt: 'Industrial',
      en: 'Industrial',
    },
    description: {
      es: 'Estética urbana inspirada en fábricas y almacenes, con ladrillo visto, tuberías expuestas, hormigón y metal.',
      pt: 'Estética urbana inspirada em fábricas e galpões, com tijolos anaparentes, tubulações expostas, concreto e metal.',
      en: 'Urban aesthetic inspired by factories and warehouses, featuring exposed brick, pipes, concrete, and metal.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bohemio',
    name: {
      es: 'Bohemio (Boho)',
      pt: 'Boêmio (Boho)',
      en: 'Bohemian (Boho)',
    },
    description: {
      es: 'Espacios relajados y libres que incorporan elementos naturales, capas de textiles, plantas y patrones globales.',
      pt: 'Espaços relaxados e livres que incorporam elementos naturais, camadas de têxteis, plantas e padrões globais.',
      en: 'Relaxed and free-spirited spaces that incorporate natural elements, layered textiles, plants, and global patterns.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rustico',
    name: {
      es: 'Rústico',
      pt: 'Rústico',
      en: 'Rustic',
    },
    description: {
      es: 'Enfoque en la belleza natural y tosca con madera sin tratar, piedra, elementos vintage y un aire campestre.',
      pt: 'Foco na beleza natural e bruta com madeira inacabada, pedra, elementos vintage e um ar campestre.',
      en: 'A focus on natural, rugged beauty featuring unfinished wood, stone, vintage elements, and a countryside feel.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mid_century_modern',
    name: {
      es: 'Mid-Century Modern',
      pt: 'Mid-Century Modern',
      en: 'Mid-Century Modern',
    },
    description: {
      es: 'Estilo de mediados del siglo XX caracterizado por formas orgánicas, patas de aguja, funcionalidad y fluidez interior-exterior.',
      pt: 'Estilo de meados do século XX caracterizado por formas orgânicas, pés palito, funcionalidade e fluidez entre interior e exterior.',
      en: 'Mid-20th-century style characterized by organic shapes, hairpin legs, functionality, and indoor-outdoor fluidity.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'farmhouse',
    name: {
      es: 'Farmhouse / Granja',
      pt: 'Farmhouse / Casa de Campo',
      en: 'Farmhouse',
    },
    description: {
      es: 'Encanto rústico americano que utiliza madera lavada, fregaderos profundos, tonos claros y un ambiente familiar.',
      pt: 'Charme rústico americano que utiliza madeira de demolição, pias profundas, tons claros e um ambiente familiar.',
      en: 'American rustic charm utilizing whitewashed wood, deep apron sinks, light tones, and a family-friendly atmosphere.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'japandi',
    name: {
      es: 'Japandi',
      pt: 'Japandi',
      en: 'Japandi',
    },
    description: {
      es: 'Fusión del minimalismo japonés y el diseño escandinavo. Espacios limpios, serenos, funcionales y muy cálidos.',
      pt: 'Fusão do minimalismo japonês e do design escandinavo. Espaços limpos, serenos, funcionais e muito calorosos.',
      en: 'A fusion of Japanese minimalism and Scandinavian design. Clean, serene, functional, and very warm spaces.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wabi_sabi',
    name: {
      es: 'Wabi-Sabi',
      pt: 'Wabi-Sabi',
      en: 'Wabi-Sabi',
    },
    description: {
      es: 'Encuentra la belleza en la imperfección. Materiales orgánicos crudos, acabados artesanales y simplicidad absoluta.',
      pt: 'Encontra a beleza na imperfeição. Materiais orgânicos brutos, acabamentos artesanais e simplicidade absoluta.',
      en: 'Finds beauty in imperfection. Raw organic materials, artisanal finishes, and absolute simplicity.',
    },
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1671269942411-fa6815b5335f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'minimalismo_calido',
    name: {
      es: 'Minimalismo Cálido',
      pt: 'Minimalismo Quente',
      en: 'Warm Minimalism',
    },
    description: {
      es: 'Espacios despejados pero acogedores, utilizando texturas suaves, maderas en tonos claros y colores tierra amables.',
      pt: 'Espaços amplos mas acolhedores, utilizando texturas suaves, madeiras em tons claros e cores quentes de terra.',
      en: 'Decluttered yet cozy spaces, using soft textures, light-toned woods, and welcoming earth colors.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rustico_moderno',
    name: {
      es: 'Rústico Moderno',
      pt: 'Rústico Moderno',
      en: 'Modern Rustic',
    },
    description: {
      es: 'Une la robustez de los elementos rústicos de madera pesada con líneas contemporáneas pulidas y herrajes limpios.',
      pt: 'Une a robustez dos elementos rústicos de madeira pesada com linhas contemporâneas polidas e ferragens limpas.',
      en: 'Blends the ruggedness of heavy wood rustic elements with sleek contemporary lines and clean hardware.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art_deco',
    name: {
      es: 'Art Déco',
      pt: 'Art Déco',
      en: 'Art Deco',
    },
    description: {
      es: 'Opulencia de los años 20 con patrones geométricos simétricos, acabados metálicos dorados, espejos y texturas suntuosas.',
      pt: 'Opulência dos anos 20 con padrões geométricos simétricos, acabamentos metálicos dourados, espelhos e texturas suntuosas.',
      en: '1920s opulence featuring symmetrical geometric patterns, golden metallic finishes, mirrors, and sumptuous textures.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eclectico',
    name: {
      es: 'Ecléctico',
      pt: 'Eclético',
      en: 'Eclectic',
    },
    description: {
      es: 'Una cuidadosa combinación de elementos de diferentes épocas, colores y estilos que logran armonía visual.',
      pt: 'Uma cuidadosa combinação de elementos de diferentes épocas, cores e estilos que alcançam harmonia visual.',
      en: 'A thoughtful mix of elements from different eras, colors, and styles that achieve visual harmony.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1615528650248-8630bcd26814?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'maximalista',
    name: {
      es: 'Maximalista',
      pt: 'Maximalista',
      en: 'Maximalist',
    },
    description: {
      es: 'El exceso bien planeado. Colores saturados, mezcla audaz de patrones, galerías de arte masivas y texturas ricas.',
      pt: 'O excesso bem planejado. Cores saturadas, mistura ousada de padrões, galerias de arte massivas e texturas ricas.',
      en: 'Well-planned excess. Saturated colors, bold mixing of patterns, massive art galleries, and rich textures.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'costero',
    name: {
      es: 'Costero / Coastal',
      pt: 'Costeiro / Coastal',
      en: 'Coastal',
    },
    description: {
      es: 'Inspirado en la vida de playa, enfocado en mucha luz natural, maderas lavadas por el sol, tonos blancos y azules marítimos.',
      pt: 'Inspirado na vida de praia, focado em muita luz natural, madeiras lavadas pelo sol, tons de branco e azuis marítimos.',
      en: 'Inspired by beach life, focusing on abundant natural light, sun-washed woods, and white and marine blue tones.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vintage_retro',
    name: {
      es: 'Vintage / Retro',
      pt: 'Vintage / Retrô',
      en: 'Vintage / Retro',
    },
    description: {
      es: 'Nostalgia de diseño que incorpora piezas originales o réplicas que conmemoran la estética de los años 50, 60 o 70.',
      pt: 'Nostalgia de design que incorpora peças originais ou réplicas que comemoram a estética dos anos 50, 60 ou 70.',
      en: 'Design nostalgia incorporating original pieces or replicas that commemorate the aesthetics of the 50s, 60s, or 70s.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'clasico_moderno',
    name: {
      es: 'Clásico Moderno',
      pt: 'Clássico Moderno',
      en: 'Modern Classic',
    },
    description: {
      es: 'Estructuras arquitectónicas tradicionales refinadas (como molduras) combinadas con mobiliario limpio e iluminación moderna.',
      pt: 'Estruturas arquitetônicas tradicionais refinadas (como molduras) combinadas com mobiliário limpo e iluminação moderna.',
      en: 'Refined traditional architectural structures (like moldings) combined with clean furniture and modern lighting.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hollywood_regency',
    name: {
      es: 'Hollywood Regency',
      pt: 'Hollywood Regency',
      en: 'Hollywood Regency',
    },
    description: {
      es: 'Glaciar, dramático y lujoso. Utiliza superficies lacadas, detalles de latón, terciopelo y contrastes marcados como el blanco y negro.',
      pt: 'Dramático e luxuoso. Utiliza superfícies laqueadas, detalhes em latão, veludo e contrastes marcados como preto e branco.',
      en: 'Dramatic and luxurious. Features lacquered surfaces, brass details, velvet, and high-contrast schemes like black and white.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shabby_chic',
    name: {
      es: 'Shabby Chic',
      pt: 'Shabby Chic',
      en: 'Shabby Chic',
    },
    description: {
      es: 'Estética romántica y suave que destaca por muebles con pintura decapada, motivos florales y paletas en tonos pastel.',
      pt: 'Estética romântica e suave que se destaca por móveis com pintura desgastada, motivos florais e paletas em tons pastel.',
      en: 'A soft, romantic aesthetic highlighting distressed painted furniture, floral motifs, and pastel color palettes.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tropical',
    name: {
      es: 'Tropical / Exótico',
      pt: 'Tropical / Exótico',
      en: 'Tropical / Exotic',
    },
    description: {
      es: 'Estilo fresco con fuerte presencia de plantas de hojas grandes, fibras naturales (mimbre, ratán) y estampados botánicos vibrantes.',
      pt: 'Estilo fresco com forte presença de plantas de folhas grandes, fibras naturais (vime, ratã) e estampas botânicas vibrantes.',
      en: 'A fresh style with a heavy presence of large-leaf plants, natural fibers (wicker, rattan), and vibrant botanical prints.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'zen',
    name: {
      es: 'Zen / Oriental',
      pt: 'Zen / Oriental',
      en: 'Zen / Oriental',
    },
    description: {
      es: 'Centrado en la relajación. Distribución espacial basada en el equilibrio, mobiliario a baja altura y conexión con la naturaleza.',
      pt: 'Centrado no relaxamento. Distribuição espacial baseada no equilíbrio, mobiliário de baixa altura e conexão com a natureza.',
      en: 'Focused on relaxation. Spatial layout based on balance, low-profile furniture, and a deep connection with nature.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1717140370275-7d847544b27b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'nordic_noir',
    name: {
      es: 'Nordic Noir',
      pt: 'Nordic Noir',
      en: 'Nordic Noir',
    },
    description: {
      es: 'La variante sofisticada del escandinavo: mantiene las líneas limpias pero utiliza gamas cromáticas oscuras de gris, carbón y negro.',
      pt: 'A variante sofisticada do escandinavo: mantém as linhas limpas mas utiliza gamas cromáticas escuras de cinza, carvão e preto.',
      en: 'The sophisticated variant of Scandinavian design: keeps clean lines but employs dark color palettes of gray, charcoal, and black.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dark_academia',
    name: {
      es: 'Gótico Moderno / Dark Academia',
      pt: 'Gótico Moderno / Dark Academia',
      en: 'Modern Gothic / Dark Academia',
    },
    description: {
      es: 'Atmósfera intelectual y misteriosa con estanterías altas de libros, maderas oscuras, cuero y una iluminación muy tenue.',
      pt: 'Atmosfera intelectual e misteriosa com estantes altas de livros, madeiras escuras, couro e uma iluminação muito tênue.',
      en: 'An intellectual and mysterious atmosphere featuring tall bookshelves, dark woods, leather, and very dim lighting.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cyberpunk',
    name: {
      es: 'Cyberpunk / Futurista',
      pt: 'Cyberpunk / Futurista',
      en: 'Cyberpunk / Futuristic',
    },
    description: {
      es: 'Vanguardia tecnológica urbana. Luces de neón integradas, superficies reflectantes oscuras y elementos decorativos de alta tecnología.',
      pt: 'Vanguarda tecnológica urbana. Luzes de néon integradas, superfícies refletoras escuras e elementos decorativos de alta tecnologia.',
      en: 'Urban technological avant-garde. Integrated neon lights, dark reflective surfaces, and high-tech decorative elements.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1649977107006-b769969c9725?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'luxe',
    name: {
      es: 'Luxe / De Lujo Contemporáneo',
      pt: 'Luxe / De Luxo Contemporâneo',
      en: 'Luxe / Contemporary Luxury',
    },
    description: {
      es: 'Uso de materiales premium personalizados como mármol exótico, cuarzo, metales pulidos a mano e iluminación arquitectónica oculta.',
      pt: 'Uso de materiais premium personalizados como mármore exótico, quartzo, metais polidos à mão e iluminação arquitetônica oculta.',
      en: 'Use of custom premium materials such as exotic marble, quartz, hand-polished metals, and concealed architectural lighting.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art_nouveau',
    name: {
      es: 'Art Nouveau',
      pt: 'Art Nouveau',
      en: 'Art Nouveau',
    },
    description: {
      es: 'Diseño clásico artesanal enfocado en líneas ondulantes y asimétricas inspiradas en el movimiento de la naturaleza.',
      pt: 'Design clássico artesanal focado em linhas ondulantes e assimétricas inspiradas no movimento da natureza.',
      en: 'Classical artisanal design focusing on undulating and asymmetrical lines inspired by the movement of nature.',
    },
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/dunelm-new-nouveau-living-room-68bedfd94deb6.jpeg?crop=1.00xw:0.710xh;0,0.0578xh&resize=640:*',
  },
  {
    id: 'brutalista',
    name: {
      es: 'Brutalista',
      pt: 'Brutalista',
      en: 'Brutalist',
    },
    description: {
      es: 'Belleza cruda basada en bloques de hormigón expuesto, formas geométricas imponentes y una textura honestamente imperfecta.',
      pt: 'Beleza bruta baseada em blocos de concreto exposto, formas geométricas imponentes e uma textura honestamente imperfeita.',
      en: 'Raw beauty based on exposed concrete blocks, imposing geometric shapes, and an honestly imperfect texture.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cabin_core',
    name: {
      es: 'Chalet Alpino / Cabin Core',
      pt: 'Chalé Alpino / Cabin Core',
      en: 'Alpine Chalet / Cabin Core',
    },
    description: {
      es: 'El refugio de montaña definitivo. Madera maciza, techos a dos aguas, texturas pesadas de lana y chimeneas imponentes.',
      pt: 'O refúgio de montanha definitivo. Madeira maciça, telhados de duas águas, texturas pesadas de lã e lareiras imponentes.',
      en: 'The ultimate mountain retreat. Solid wood, gabled roofs, heavy wool textures, and imposing fireplaces.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'provenzal',
    name: {
      es: 'Provenzal / Francés Country',
      pt: 'Provençal / Francês Country',
      en: 'Provencal / French Country',
    },
    description: {
      es: 'Inspirado en las casas rurales del sur de Francia: herrajes delicados, telas de lino, tonos lavanda, piedra y elegancia rústica discreta.',
      pt: 'Inspirado nas casas rurais do sul da França: ferragens delicadas, tecidos de linho, tons de lavanda, pedra e elegância rústica discreta.',
      en: 'Inspired by rural houses in the South of France: delicate ironwork, linen fabrics, lavender tones, stone, and understated rustic elegance.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80',
  },
];
export default ROOM_STYLES;
