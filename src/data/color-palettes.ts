export interface ColorPalette {
  id: string;
  name: {
    es: string;
    en: string;
    pt: string;
  };
  palette: string[];
}

const COLOR_PALETTES: ColorPalette[] = [
  {
    id: '7b2e9f1a-4c3d-4e5f-8a9b-0c1d2e3f4g5h',
    name: {
      es: 'Serenidad Nórdica',
      en: 'Nordic Serenity',
      pt: 'Serenidade Nórdica',
    },
    palette: ['#F4F4F2', '#E8E8E8', '#BBBFCA', '#4F5D75', '#D1AC00'],
  },
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: {
      es: 'Minimalismo Cálido',
      en: 'Warm Minimalism',
      pt: 'Minimalismo Cálido',
    },
    palette: ['#FDFBF7', '#F4EAE1', '#E6CCB2', '#B08968', '#7F5539'],
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    name: {
      es: 'Japandi Suave',
      en: 'Soft Japandi',
      pt: 'Japandi Suave',
    },
    palette: ['#FAF6F0', '#EAE3D2', '#94B49F', '#B4A79E', '#2C3639'],
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    name: {
      es: 'Brisa Ártica',
      en: 'Arctic Breeze',
      pt: 'Brisa Ártica',
    },
    palette: ['#F7F9FA', '#E3E9ED', '#B9C6CD', '#6E8594', '#3A4750'],
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    name: {
      es: 'Nórdico Terroso',
      en: 'Earthy Scandi',
      pt: 'Nórdico Terroso',
    },
    palette: ['#F9F6F0', '#F0E5D8', '#D7C49E', '#C0A080', '#524A4E'],
  },
  {
    id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
    name: {
      es: 'Industrial Urbano',
      en: 'Urban Industrial',
      pt: 'Industrial Urbano',
    },
    palette: ['#D3D3D3', '#707070', '#333333', '#8B4513', '#B22222'],
  },
  {
    id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
    name: {
      es: 'Cabaña Moderna',
      en: 'Rustic Cabin',
      pt: 'Cabana Moderna',
    },
    palette: ['#F5F2EB', '#D2B48C', '#A0522D', '#2F4F4F', '#1C1C1C'],
  },
  {
    id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
    name: {
      es: 'Cemento y Latón',
      en: 'Concrete & Brass',
      pt: 'Cimento e Latão',
    },
    palette: ['#E5E5E5', '#B5B5B5', '#4A4A4A', '#D4AF37', '#1E272C'],
  },
  {
    id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
    name: {
      es: 'Refugio del Bosque',
      en: 'Forest Lodge',
      pt: 'Refúgio do Bosque',
    },
    palette: ['#F4F3EF', '#C2B280', '#606C38', '#283618', '#DDA15E'],
  },
  {
    id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
    name: {
      es: 'Granja Moderna',
      en: 'Modern Barnhouse',
      pt: 'Celeiro Moderno',
    },
    palette: ['#FFFFFF', '#F2EFE9', '#8C8C8C', '#4A3B32', '#2B3A42'],
  },
  {
    id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
    name: {
      es: 'Oasis Biofílico',
      en: 'Biophilic Oasis',
      pt: 'Oásis Biofílico',
    },
    palette: ['#F3F7F4', '#C1E1C1', '#77DD77', '#3B7A57', '#4A3B32'],
  },
  {
    id: '1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z',
    name: {
      es: 'Cálido Desierto',
      en: 'Desert Warmth',
      pt: 'Deserto Quente',
    },
    palette: ['#FFF5EE', '#F4A460', '#CD853F', '#E6A817', '#556B2F'],
  },
  {
    id: '2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a',
    name: {
      es: 'Eucalipto Relajante',
      en: 'Eucalyptus Calm',
      pt: 'Eucalipto Relaxante',
    },
    palette: ['#F5F7F6', '#D1E8E2', '#10C6B5', '#4D6466', '#1D2731'],
  },
  {
    id: '3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b',
    name: {
      es: 'Costa Mediterránea',
      en: 'Mediterranean Coast',
      pt: 'Costa Mediterrânea',
    },
    palette: ['#FAF9F6', '#F4E0A5', '#AE9B7B', '#4682B4', '#1D4E89'],
  },
  {
    id: '4n5o6p7q-8r9s-0t1u-2v3w-4x5y6z7a8b9c',
    name: {
      es: 'Cosecha de Otoño',
      en: 'Autumn Harvest',
      pt: 'Colheita de Outono',
    },
    palette: ['#FDF6EC', '#F0A500', '#CF7500', '#7D0633', '#31112C'],
  },
  {
    id: '5o6p7q8r-9s0t-1u2v-3w4x-5y6z7a8b9c0d',
    name: {
      es: 'Clásico de Mediados de Siglo',
      en: 'Mid-Century Classic',
      pt: 'Clássico Mid-Century',
    },
    palette: ['#F7F4EB', '#D9A05B', '#C84B31', '#1F4068', '#162447'],
  },
  {
    id: '6p7q8r9s-0t1u-2v3w-4x5y-6z7a8b9c0d1e',
    name: {
      es: 'Glamour Art Decó',
      en: 'Art Deco Glam',
      pt: 'Glamour Art Déco',
    },
    palette: ['#F9F5EB', '#004B49', '#1A1A2E', '#C5A880', '#42032C'],
  },
  {
    id: '7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f',
    name: {
      es: 'Lujo Contemporáneo',
      en: 'Modern Luxury',
      pt: 'Luxo Contemporâneo',
    },
    palette: ['#F8F9FA', '#E9ECEF', '#6C757D', '#343A40', '#B89742'],
  },
  {
    id: '8r9s0t1u-2v3w-4x5y-6z7a-8b9c0d1e2f3g',
    name: {
      es: 'Elegancia Parisina',
      en: 'Parisian Chic',
      pt: 'Elegância Parisiense',
    },
    palette: ['#FFFDF9', '#F3E8EE', '#D6C7CD', '#4F4A47', '#111111'],
  },
  {
    id: '9s0t1u2v-3w4x-5y6z-7a8b-9c0d1e2f3g4h',
    name: {
      es: 'Terciopelo Clásico',
      en: 'Classic Velvet',
      pt: 'Veludo Clássico',
    },
    palette: ['#F4F6F7', '#BDB76B', '#4682B4', '#800020', '#2F4F4F'],
  },
  {
    id: '0t1u2v3w-4x5y-6z7a-8b9c-0d1e2f3g4h5i',
    name: {
      es: 'Nube de Algodón',
      en: 'Cotton Candy',
      pt: 'Nuvem de Algodão',
    },
    palette: ['#FFF5F5', '#FFD3B6', '#FFAAA6', '#DCEDC1', '#A8E6CF'],
  },
  {
    id: '1u2v3w4x-5y6z-7a8b-9c0d-1e2f3g4h5i6j',
    name: {
      es: 'Romántico Vintage',
      en: 'Vintage Shabby',
      pt: 'Romântico Vintage',
    },
    palette: ['#FFFFF0', '#FCE4EC', '#E8E7E3', '#B0C4DE', '#D2B48C'],
  },
  {
    id: '2v3w4x5y-6z7a-8b9c-0d1e-2f3g4h5i6j7k',
    name: {
      es: 'Lavanda Serena',
      en: 'Serene Lavender',
      pt: 'Lavanda Serena',
    },
    palette: ['#F9F8FB', '#E6E6FA', '#D8BFD8', '#9370DB', '#483D8B'],
  },
  {
    id: '3w4x5y6z-7a8b-9c0d-1e2f-3g4h5i6j7k8l',
    name: {
      es: 'Salvia y Rosa',
      en: 'Sage & Rose',
      pt: 'Sálvia e Rosa',
    },
    palette: ['#FAFAF6', '#E3C4B8', '#C1CDA8', '#7A8B7B', '#554944'],
  },
  {
    id: '4x5y6z7a-8b9c-0d1e-2f3g-4h5i6j7k8l9m',
    name: {
      es: 'Menta Ensoñador',
      en: 'Whimsical Mint',
      pt: 'Menta Sonhador',
    },
    palette: ['#F6FFF8', '#E8F5E9', '#C8E6C9', '#B3E5FC', '#FFCC80'],
  },
  {
    id: '5y6z7a8b-9c0d-1e2f-3g4h-5i6j7k8l9m0n',
    name: {
      es: 'Pop Retro',
      en: 'Retro Pop',
      pt: 'Pop Retrô',
    },
    palette: ['#F4EEA9', '#FF7F3F', '#EA1179', '#14C38E', '#00FFAB'],
  },
  {
    id: '6z7a8b9c-0d1e-2f3g-4h5i-6j7k8l9m0n1o',
    name: {
      es: 'Bohemio Ecléctico',
      en: 'Boho Eclectic',
      pt: 'Boho Eclético',
    },
    palette: ['#F9F1E7', '#E2703A', '#C79F27', '#4D606E', '#364536'],
  },
  {
    id: '7a8b9c0d-1e2f-3g4h-5i6j-7k8l9m0n1o2p',
    name: {
      es: 'Terciopelo Eléctrico',
      en: 'Electric Velvet',
      pt: 'Veludo Elétrico',
    },
    palette: ['#F5F5F5', '#FF007F', '#7B2CBF', '#00B4D8', '#03045E'],
  },
  {
    id: '8b9c0d1e-2f3g-4h5i-6j7k-8l9m0n1o2p3q',
    name: {
      es: 'Tonos Joya',
      en: 'Jewel Tones',
      pt: 'Tons Joia',
    },
    palette: ['#FAF9F6', '#0F4C5C', '#E36414', '#9A031E', '#5F0F40'],
  },
  {
    id: '9c0d1e2f-3g4h-5i6j-7k8l-9m0n1o2p3q4r',
    name: {
      es: 'Terracota Especiada',
      en: 'Spiced Terracotta',
      pt: 'Terracota Saborosa',
    },
    palette: ['#F5ECE1', '#E28743', '#A64B2A', '#763813', '#1E3D59'],
  },
  {
    id: '0d1e2f3g-4h5i-6j7k-8l9m-0n1o2p3q4r5s',
    name: {
      es: 'Estilo Hamptons',
      en: 'Hamptons Coastal',
      pt: 'Estilo Hamptons',
    },
    palette: ['#FFFFFF', '#F0F4F8', '#BCCCDC', '#627D98', '#D9B48F'],
  },
  {
    id: '1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t',
    name: {
      es: 'Profundidades del Océano',
      en: 'Ocean Depths',
      pt: 'Profundezas do Oceano',
    },
    palette: ['#F7FAFC', '#E2E8F0', '#4A5568', '#2B6CB0', '#0D1B2A'],
  },
  {
    id: '2f3g4h5i-6j7k-8l9m-0n1o-2p3q4r5s6t7u',
    name: {
      es: 'Playa de Arena',
      en: 'Sandy Beach',
      pt: 'Praia de Areia',
    },
    palette: ['#FFFDF9', '#F5EBE0', '#E3D5CA', '#D5BDAF', '#A8DADC'],
  },
  {
    id: '3g4h5i6j-7k8l-9m0n-1o2p-3q4r5s6t7u8v',
    name: {
      es: 'Atardecer en Malibú',
      en: 'Malibu Sunset',
      pt: 'Pôr do Sol em Malibu',
    },
    palette: ['#FFF8F0', '#FCEADE', '#FFB5A7', '#FFCAD4', '#90E0EF'],
  },
  {
    id: '4h5i6j7k-8l9m-0n1o-2p3q-4r5s6t7u8v9w',
    name: {
      es: 'Azul Marino y Bronce',
      en: 'Navy & Brass',
      pt: 'Azul Marinho e Bronze',
    },
    palette: ['#FFFFFC', '#ECE9E2', '#1B263B', '#0D1321', '#CD7F32'],
  },
];

export default COLOR_PALETTES;
