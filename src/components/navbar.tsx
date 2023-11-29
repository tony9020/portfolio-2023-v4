'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HEADER_LINKS } from '@/config/links'
import cn from '@/utils/cn'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <ul className='hidden space-x-2 md:flex'>
      {HEADER_LINKS.map((link) => {
        return (
          <li key={link.text}>
            <Link
              className={cn(
                'rounded px-3 py-2 text-sm font-medium transition-colors duration-150',
                {
                  ['text-muted-foreground hover:text-foreground']:
                    link.href !== pathname
                },
                {
                  ['text-foreground']: link.href === pathname
                }
              )}
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default Navbar
