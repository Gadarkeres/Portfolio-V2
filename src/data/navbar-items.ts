export interface NavbarItems {
  titleKey: string
  path: string
  index?: number
  toggleMenu?: () => void
}

export const navbarItems: NavbarItems[] = [
  { titleKey: 'home', path: '/' },
  { titleKey: 'about', path: '/sobre' },
  { titleKey: 'skills', path: '/habilidades' },
  { titleKey: 'certificates', path: '/certificados' }
]
