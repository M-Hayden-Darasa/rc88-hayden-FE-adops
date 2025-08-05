import React from 'react'

import { cn } from '@/lib/utils'
import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'
import { DigitalProductsInterface } from '@/models/home'
import { handleRedirectBackstage } from '@/helpers/logics/common'

function CardProduct({ product }: { product: DigitalProductsInterface }) {
  const { thumbnail, nameProduct } = product

  return (
    <section className="ml-7 group cursor-pointer" onClick={handleRedirectBackstage}>
      <div className="h-[330px] max-extrasmall-mobile:max-w-[330px] rounded-small">
        <ImageCommon
          src={thumbnail}
          width={450}
          height={330}
          className="rounded-small h-[330px] object-fill"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Typography className={cn('content-medium group-hover:underline')}>
          {nameProduct || ''}
        </Typography>
      </div>
    </section>
  )
}

export default CardProduct
