export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface RootLayoutProps {
  children: React.ReactNode
}


export interface MainNavProps {
  items?: NavItem[]
}