import React from 'react'
import Image from '@/components/mdx/image'

const Logo = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      <Image
                src='/images/avatar.png'
                width={32}
                height={32}
                alt='Tony'
              />
    )
  }
)

Logo.displayName = 'Logo'

export { Logo }
