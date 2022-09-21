interface ICategory {
  id: string
  name: string
  href: string
}

export const AllCategories: ICategory[] = [
  {
    id: 'history',
    name: 'History',
    href: '/categories/history'
  },
  {
    id: 'frontend',
    name: 'Frontend',
    href: '/categories/frontend'
  },
  {
    id: 'lifeStyle',
    name: 'Life Style',
    href: '/categories/lifeStyle'
  }
]
