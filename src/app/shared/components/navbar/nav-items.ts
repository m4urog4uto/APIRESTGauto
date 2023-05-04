interface NavItem {
  path: string;
  title: string;
  icon?: string;
  roleAccepted: string[];
}

const links: NavItem[] = [
  {
    path: 'alumnos',
    title: 'Alumnos',
    icon: 'person',
    roleAccepted: ['Director', 'Profesor']
  },
  {
    path: 'profesores',
    title: 'Profesores',
    icon: 'person',
    roleAccepted: ['Director']
  },
]

export default links;
