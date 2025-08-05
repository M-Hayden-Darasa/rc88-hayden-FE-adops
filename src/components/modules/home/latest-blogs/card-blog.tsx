import React from 'react'
import { useTranslation } from 'next-i18next'

import { LatestBlogInterface } from '@/models/home'

import ImageCommon from '@/components/ui/image'
import { Typography } from '@/components/ui/typography'
import { handleRedirectBackstageNew } from '@/helpers/logics/common'

function CardBlog({ blog }: { blog: LatestBlogInterface }) {
  const { t } = useTranslation('home')

  const { thumnail, dateTime, label, content } = blog

  return (
    <section className="cursor-pointer" onClick={handleRedirectBackstageNew}>
      <div className="overflow-hidden rounded-small">
        <ImageCommon
          src={thumnail}
          width={700}
          className="rounded-small h-[600px] max-tablet:w-full transform transition-transform duration-300 ease-in-out hover:scale-110 max-large-mobile:h-80"
        />
      </div>
      <Typography variant="p" className="text-text mt-5">
        {dateTime || ''}
      </Typography>
      <Typography variant="h4" className="mt-2">
        {t(`latest-blog-card.${label}`) || ''}
      </Typography>
      <Typography variant="p" className="text-text mt-2">
        {t(`latest-blog-card.${content}`) || ''}
      </Typography>
    </section>
  )
}

export default CardBlog
