export interface ColorPalette {
  name: {
    es: string;
    en: string;
    pt: string;
  };
  palette: string[];
}

const COLOR_PALETTES: ColorPalette[] = [
  {
    name: {
      es: 'Serenidad Nórdica',
      en: 'Nordic Serenity',
      pt: 'Serenidade Nórdica',
    },
    palette: ['#F4F4F2', '#E8E8E8', '#BBBFCA', '#4F5D75', '#D1AC00'],
  },
  {
    name: {
      es: 'Minimalismo Cálido',
      en: 'Warm Minimalism',
      pt: 'Minimalismo Cálido',
    },
    palette: ['#FDFBF7', '#F4EAE1', '#E6CCB2', '#B08968', '#7F5539'],
  },
  {
    name: {
      es: 'Japandi Suave',
      en: 'Soft Japandi',
      pt: 'Japandi Suave',
    },
    palette: ['#FAF6F0', '#EAE3D2', '#94B49F', '#B4A79E', '#2C3639'],
  },
  {
    name: {
      es: 'Brisa Ártica',
      en: 'Arctic Breeze',
      pt: 'Brisa Ártica',
    },
    palette: ['#F7F9FA', '#E3E9ED', '#B9C6CD', '#6E8594', '#3A4750'],
  },
  {
    name: {
      es: 'Nórdico Terroso',
      en: 'Earthy Scandi',
      pt: 'Nórdico Terroso',
    },
    palette: ['#F9F6F0', '#F0E5D8', '#D7C49E', '#C0A080', '#524A4E'],
  },
  {
    name: {
      es: 'Industrial Urbano',
      en: 'Urban Industrial',
      pt: 'Industrial Urbano',
    },
    palette: ['#D3D3D3', '#707070', '#333333', '#8B4513', '#B22222'],
  },
  {
    name: {
      es: 'Cabaña Moderna',
      en: 'Rustic Cabin',
      pt: 'Cabana Moderna',
    },
    palette: ['#F5F2EB', '#D2B48C', '#A0522D', '#2F4F4F', '#1C1C1C'],
  },
  {
    name: {
      es: 'Cemento y Latón',
      en: 'Concrete & Brass',
      pt: 'Cimento e Latão',
    },
    palette: ['#E5E5E5', '#B5B5B5', '#4A4A4A', '#D4AF37', '#1E272C'],
  },
  {
    name: {
      es: 'Refugio del Bosque',
      en: 'Forest Lodge',
      pt: 'Refúgio do Bosque',
    },
    palette: ['#F4F3EF', '#C2B280', '#606C38', '#283618', '#DDA15E'],
  },
  {
    name: {
      es: 'Granja Moderna',
      en: 'Modern Barnhouse',
      pt: 'Celeiro Moderno',
    },
    palette: ['#FFFFFF', '#F2EFE9', '#8C8C8C', '#4A3B32', '#2B3A42'],
  },
  {
    name: {
      es: 'Oasis Biofílico',
      en: 'Biophilic Oasis',
      pt: 'Oásis Biofílico',
    },
    palette: ['#F3F7F4', '#C1E1C1', '#77DD77', '#3B7A57', '#4A3B32'],
  },
  {
    name: {
      es: 'Cálido Desierto',
      en: 'Desert Warmth',
      pt: 'Deserto Quente',
    },
    palette: ['#FFF5EE', '#F4A460', '#CD853F', '#E6A817', '#556B2F'],
  },
  {
    name: {
      es: 'Eucalipto Relajante',
      en: 'Eucalyptus Calm',
      pt: 'Eucalipto Relaxante',
    },
    palette: ['#F5F7F6', '#D1E8E2', '#10C6B5', '#4D6466', '#1D2731'],
  },
  {
    name: {
      es: 'Costa Mediterránea',
      en: 'Mediterranean Coast',
      pt: 'Costa Mediterrânea',
    },
    palette: ['#FAF9F6', '#F4E0A5', '#AE9B7B', '#4682B4', '#1D4E89'],
  },
  {
    name: {
      es: 'Cosecha de Otoño',
      en: 'Autumn Harvest',
      pt: 'Colheita de Outono',
    },
    palette: ['#FDF6EC', '#F0A500', '#CF7500', '#7D0633', '#31112C'],
  },
  {
    name: {
      es: 'Clásico de Mediados de Siglo',
      en: 'Mid-Century Classic',
      pt: 'Clássico Mid-Century',
    },
    palette: ['#F7F4EB', '#D9A05B', '#C84B31', '#1F4068', '#162447'],
  },
  {
    name: {
      es: 'Glamour Art Decó',
      en: 'Art Deco Glam',
      pt: 'Glamour Art Déco',
    },
    palette: ['#F9F5EB', '#004B49', '#1A1A2E', '#C5A880', '#42032C'],
  },
  {
    name: {
      es: 'Lujo Contemporáneo',
      en: 'Modern Luxury',
      pt: 'Luxo Contemporâneo',
    },
    palette: ['#F8F9FA', '#E9ECEF', '#6C757D', '#343A40', '#B89742'],
  },
  {
    name: {
      es: 'Elegancia Parisina',
      en: 'Parisian Chic',
      pt: 'Elegância Parisiense',
    },
    palette: ['#FFFDF9', '#F3E8EE', '#D6C7CD', '#4F4A47', '#111111'],
  },
  {
    name: {
      es: 'Terciopelo Clásico',
      en: 'Classic Velvet',
      pt: 'Veludo Clássico',
    },
    palette: ['#F4F6F7', '#BDB76B', '#4682B4', '#800020', '#2F4F4F'],
  },
  {
    name: {
      es: 'Nube de Algodón',
      en: 'Cotton Candy',
      pt: 'Nuvem de Algodão',
    },
    palette: ['#FFF5F5', '#FFD3B6', '#FFAAA6', '#DCEDC1', '#A8E6CF'],
  },
  {
    name: {
      es: 'Romántico Vintage',
      en: 'Vintage Shabby',
      pt: 'Romântico Vintage',
    },
    palette: ['#FFFFF0', '#FCE4EC', '#E8E7E3', '#B0C4DE', '#D2B48C'],
  },
  {
    name: {
      es: 'Lavanda Serena',
      en: 'Serene Lavender',
      pt: 'Lavanda Serena',
    },
    palette: ['#F9F8FB', '#E6E6FA', '#D8BFD8', '#9370DB', '#483D8B'],
  },
  {
    name: {
      es: 'Salvia y Rosa',
      en: 'Sage & Rose',
      pt: 'Sálvia e Rosa',
    },
    palette: ['#FAFAF6', '#E3C4B8', '#C1CDA8', '#7A8B7B', '#554944'],
  },
  {
    name: {
      es: 'Menta Ensoñador',
      en: 'Whimsical Mint',
      pt: 'Menta Sonhador',
    },
    palette: ['#F6FFF8', '#E8F5E9', '#C8E6C9', '#B3E5FC', '#FFCC80'],
  },
  {
    name: {
      es: 'Pop Retro',
      en: 'Retro Pop',
      pt: 'Pop Retrô',
    },
    palette: ['#F4EEA9', '#FF7F3F', '#EA1179', '#14C38E', '#00FFAB'],
  },
  {
    name: {
      es: 'Bohemio Ecléctico',
      en: 'Boho Eclectic',
      pt: 'Boho Eclético',
    },
    palette: ['#F9F1E7', '#E2703A', '#C79F27', '#4D606E', '#364536'],
  },
  {
    name: {
      es: 'Terciopelo Eléctrico',
      en: 'Electric Velvet',
      pt: 'Veludo Elétrico',
    },
    palette: ['#F5F5F5', '#FF007F', '#7B2CBF', '#00B4D8', '#03045E'],
  },
  {
    name: {
      es: 'Tonos Joya',
      en: 'Jewel Tones',
      pt: 'Tons Joia',
    },
    palette: ['#FAF9F6', '#0F4C5C', '#E36414', '#9A031E', '#5F0F40'],
  },
  {
    name: {
      es: 'Terracota Especiada',
      en: 'Spiced Terracotta',
      pt: 'Terracota Saborosa',
    },
    palette: ['#F5ECE1', '#E28743', '#A64B2A', '#763813', '#1E3D59'],
  },
  {
    name: {
      es: 'Estilo Hamptons',
      en: 'Hamptons Coastal',
      pt: 'Estilo Hamptons',
    },
    palette: ['#FFFFFF', '#F0F4F8', '#BCCCDC', '#627D98', '#D9B48F'],
  },
  {
    name: {
      es: 'Profundidades del Océano',
      en: 'Ocean Depths',
      pt: 'Profundezas do Oceano',
    },
    palette: ['#F7FAFC', '#E2E8F0', '#4A5568', '#2B6CB0', '#0D1B2A'],
  },
  {
    name: {
      es: 'Playa de Arena',
      en: 'Sandy Beach',
      pt: 'Praia de Areia',
    },
    palette: ['#FFFDF9', '#F5EBE0', '#E3D5CA', '#D5BDAF', '#A8DADC'],
  },
  {
    name: {
      es: 'Atardecer en Malibú',
      en: 'Malibu Sunset',
      pt: 'Pôr do Sol em Malibu',
    },
    palette: ['#FFF8F0', '#FCEADE', '#FFB5A7', '#FFCAD4', '#90E0EF'],
  },
  {
    name: {
      es: 'Azul Marino y Bronce',
      en: 'Navy & Brass',
      pt: 'Azul Marinho e Bronze',
    },
    palette: ['#FFFFFC', '#ECE9E2', '#1B263B', '#0D1321', '#CD7F32'],
  },
];

export default COLOR_PALETTES;
