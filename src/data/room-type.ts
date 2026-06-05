import {
  BarbellIcon,
  BathtubIcon,
  BedIcon,
  BriefcaseIcon,
  CarIcon,
  ChefHatIcon,
  FilmSlateIcon,
  Icon,
  PackageIcon,
  PathIcon,
  SolarRoofIcon,
  TreeIcon,
  UsersThreeIcon,
  WrenchIcon,
} from 'phosphor-react-native';

export interface RoomType {
  icon: Icon;
  title: string;
  items: string[];
}

interface RoomTypesProps {
  es: RoomType[];
  en: RoomType[];
  pt: RoomType[];
}

const ROOM_TYPES: RoomTypesProps = {
  es: [
    {
      icon: UsersThreeIcon,
      title: 'Áreas sociales',
      items: [
        'Sala de estar',
        'Sala de TV',
        'Sala de juegos',
        'Comedor',
        'Comedor diario',
        'Recibidor',
        'Biblioteca',
        'Sala de música',
        'Sala de entretenimiento',
      ],
    },
    {
      icon: BedIcon,
      title: 'Dormitorios',
      items: [
        'Dormitorio principal',
        'Dormitorio secundario',
        'Dormitorio infantil',
        'Habitación de invitados',
        'Habitación compartida',
        'Vestidor',
      ],
    },
    {
      icon: BathtubIcon,
      title: 'Baños',
      items: [
        'Baño completo',
        'Medio baño',
        'Baño de visitas',
        'Baño en suite',
        'Baño de servicio',
      ],
    },
    {
      icon: ChefHatIcon,
      title: 'Cocina y apoyo',
      items: [
        'Cocina',
        'Cocina americana',
        'Cocina gourmet',
        'Despensa',
        'Lavandería',
        'Cuarto de limpieza',
        'Cuarto de planchado',
      ],
    },
    {
      icon: BriefcaseIcon,
      title: 'Trabajo y estudio',
      items: ['Oficina', 'Estudio', 'Taller', 'Sala de reuniones privada'],
    },
    {
      icon: BarbellIcon,
      title: 'Salud y bienestar',
      items: ['Gimnasio', 'Sala de yoga', 'Sauna', 'Spa doméstico', 'Sala de masajes'],
    },
    {
      icon: PackageIcon,
      title: 'Almacenamiento',
      items: ['Trastero', 'Bodega', 'Cuarto de herramientas', 'Armario de almacenamiento'],
    },
    {
      icon: WrenchIcon,
      title: 'Servicio',
      items: ['Cuarto de servicio', 'Dormitorio para empleados', 'Baño de servicio'],
    },
    {
      icon: SolarRoofIcon,
      title: 'Espacios semiabiertos',
      items: ['Terraza', 'Balcón', 'Porche', 'Patio cubierto', 'Quincho', 'Cocina exterior'],
    },
    {
      icon: CarIcon,
      title: 'Vehículos',
      items: ['Garaje', 'Cochera', 'Taller mecánico doméstico'],
    },
    {
      icon: FilmSlateIcon,
      title: 'Espacios especiales',
      items: [
        'Cine en casa',
        'Bodega de vinos',
        'Sala de billar',
        'Sala de videojuegos',
        'Sala de hobbies',
        'Invernadero',
        'Cuarto de pánico',
        'Estudio de grabación',
        'Sala de servidores/domótica',
      ],
    },
    {
      icon: PathIcon,
      title: 'Espacios de circulación',
      items: ['Pasillos', 'Escaleras', 'Ascensor residencial', 'Hall de distribución'],
    },
    {
      icon: TreeIcon,
      title: 'Espacios exteriores',
      items: [
        'Jardín',
        'Patio',
        'Piscina',
        'Huerto',
        'Área de juegos infantiles',
        'Zona para mascotas',
      ],
    },
  ],
  en: [
    {
      icon: UsersThreeIcon,
      title: 'Social Areas',
      items: [
        'Living Room',
        'TV Room',
        'Game Room',
        'Dining Room',
        'Breakfast Room',
        'Foyer',
        'Library',
        'Music Room',
        'Entertainment Room',
      ],
    },
    {
      icon: BedIcon,
      title: 'Bedrooms',
      items: [
        'Master Bedroom',
        'Secondary Bedroom',
        "Children's Bedroom",
        'Guest Room',
        'Shared Bedroom',
        'Walk-in Closet',
      ],
    },
    {
      icon: BathtubIcon,
      title: 'Bathrooms',
      items: [
        'Full Bathroom',
        'Half Bathroom',
        'Guest Bathroom',
        'Ensuite Bathroom',
        'Service Bathroom',
      ],
    },
    {
      icon: ChefHatIcon,
      title: 'Kitchen and Support',
      items: [
        'Kitchen',
        'Open Kitchen',
        'Gourmet Kitchen',
        'Pantry',
        'Laundry Room',
        'Cleaning Room',
        'Ironing Room',
      ],
    },
    {
      icon: BriefcaseIcon,
      title: 'Work and Study',
      items: ['Home Office', 'Study Room', 'Workshop', 'Private Meeting Room'],
    },
    {
      icon: BarbellIcon,
      title: 'Health and Wellness',
      items: ['Gym', 'Yoga Room', 'Sauna', 'Home Spa', 'Massage Room'],
    },
    {
      icon: PackageIcon,
      title: 'Storage',
      items: ['Storage Room', 'Cellar', 'Tool Room', 'Storage Closet'],
    },
    {
      icon: WrenchIcon,
      title: 'Service Areas',
      items: ['Service Room', 'Staff Bedroom', 'Service Bathroom'],
    },
    {
      icon: SolarRoofIcon,
      title: 'Semi-Open Spaces',
      items: ['Terrace', 'Balcony', 'Porch', 'Covered Patio', 'BBQ Area', 'Outdoor Kitchen'],
    },
    {
      icon: CarIcon,
      title: 'Vehicle Areas',
      items: ['Garage', 'Carport', 'Home Workshop'],
    },
    {
      icon: FilmSlateIcon,
      title: 'Special Spaces',
      items: [
        'Home Theater',
        'Wine Cellar',
        'Billiard Room',
        'Gaming Room',
        'Hobby Room',
        'Greenhouse',
        'Panic Room',
        'Recording Studio',
        'Server/Home Automation Room',
      ],
    },
    {
      icon: PathIcon,
      title: 'Circulation Areas',
      items: ['Hallways', 'Stairs', 'Residential Elevator', 'Landing Hall'],
    },
    {
      icon: TreeIcon,
      title: 'Outdoor Spaces',
      items: [
        'Garden',
        'Patio',
        'Swimming Pool',
        'Vegetable Garden',
        "Children's Play Area",
        'Pet Area',
      ],
    },
  ],
  pt: [
    {
      icon: UsersThreeIcon,
      title: 'Áreas Sociais',
      items: [
        'Sala de Estar',
        'Sala de TV',
        'Sala de Jogos',
        'Sala de Jantar',
        'Copa',
        'Hall de Entrada',
        'Biblioteca',
        'Sala de Música',
        'Sala de Entretenimento',
      ],
    },
    {
      icon: BedIcon,
      title: 'Quartos',
      items: [
        'Suíte Master',
        'Quarto Secundário',
        'Quarto Infantil',
        'Quarto de Hóspedes',
        'Quarto Compartilhado',
        'Closet',
      ],
    },
    {
      icon: BathtubIcon,
      title: 'Banheiros',
      items: [
        'Banheiro Completo',
        'Lavabo',
        'Banheiro de Visitas',
        'Banheiro Suíte',
        'Banheiro de Serviço',
      ],
    },
    {
      icon: ChefHatIcon,
      title: 'Cozinha e Apoio',
      items: [
        'Cozinha',
        'Cozinha Americana',
        'Cozinha Gourmet',
        'Despensa',
        'Lavanderia',
        'Área de Limpeza',
        'Área de Passar Roupa',
      ],
    },
    {
      icon: BriefcaseIcon,
      title: 'Trabalho e Estudo',
      items: ['Home Office', 'Escritório', 'Oficina', 'Sala de Reuniões Privada'],
    },
    {
      icon: BarbellIcon,
      title: 'Saúde e Bem-Estar',
      items: ['Academia', 'Sala de Yoga', 'Sauna', 'Spa Residencial', 'Sala de Massagem'],
    },
    {
      icon: PackageIcon,
      title: 'Armazenamento',
      items: ['Depósito', 'Adega', 'Oficina de Ferramentas', 'Armário de Armazenamento'],
    },
    {
      icon: WrenchIcon,
      title: 'Serviço',
      items: ['Quarto de Serviço', 'Quarto de Funcionário', 'Banheiro de Serviço'],
    },
    {
      icon: SolarRoofIcon,
      title: 'Áreas Semiabertas',
      items: ['Terraço', 'Sacada', 'Varanda', 'Pátio Coberto', 'Churrasqueira', 'Cozinha Externa'],
    },
    {
      icon: CarIcon,
      title: 'Veículos',
      items: ['Garagem', 'Cobertura para Veículos', 'Oficina Residencial'],
    },
    {
      icon: FilmSlateIcon,
      title: 'Espaços Especiais',
      items: [
        'Cinema em Casa',
        'Adega de Vinhos',
        'Sala de Bilhar',
        'Sala de Games',
        'Sala de Hobby',
        'Estufa',
        'Quarto do Pânico',
        'Estúdio de Gravação',
        'Sala de Servidores/Automação',
      ],
    },
    {
      icon: PathIcon,
      title: 'Circulação',
      items: ['Corredores', 'Escadas', 'Elevador Residencial', 'Hall de Distribuição'],
    },
    {
      icon: TreeIcon,
      title: 'Espaços Externos',
      items: ['Jardim', 'Pátio', 'Piscina', 'Horta', 'Área Infantil', 'Área para Pets'],
    },
  ],
};

export default ROOM_TYPES;
