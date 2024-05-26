export interface NavbarItems {
    title: string;
    path: string;
    index?: number;
    toggleMenu?: () => void;
}

export const navbarItems: NavbarItems[] = [
    { title: 'Home', path: '/' },
    { title: 'Habilidades', path: '/habilidades' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Certificados', path: '/certificados' },
    { title: 'Login', path: '/Login' },
];