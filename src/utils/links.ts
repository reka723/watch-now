type Link = {
    href: string,
    label: string,
    secret?: boolean
}

export const links: Link[] = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/orders', label: 'My Orders', secret: true },
    { href: '/contact', label: 'Contact us' },
]