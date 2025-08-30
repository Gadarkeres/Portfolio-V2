export interface NavbarItems {
    title: string;
    path: string;
    index?: number;
    toggleMenu?: () => void;
}

export const navbarItems: NavbarItems[] = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Habilidades', path: '/habilidades' },
    { title: 'Certificados', path: '/certificados' }
 //   { title: 'Login', path: '/login' },
];