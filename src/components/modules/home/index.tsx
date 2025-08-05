import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'

import { KEY_REF_HEADER_MENU } from '@/helpers/constants/header.constant'

const TheDigitalMarketing = dynamic(() => import('./the-digital-marketing'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const Products = dynamic(() => import('./products'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const PopularGenre = dynamic(() => import('./popular-genre'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const WhoWeAre = dynamic(() => import('./who-we-are'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const Services = dynamic(() => import('./services'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const WeBring = dynamic(() => import('./we-bring'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

const LatestBlog = dynamic(() => import('./latest-blogs'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

function Home() {
  const { t } = useTranslation('home')
  const router = useRouter()

  const marketingRef = useRef<HTMLElement | null>(null)
  const whoWeAreRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const blogRef = useRef<HTMLElement | null>(null)
  const weBringRef = useRef<HTMLElement | null>(null)

  const sectionRefs = useMemo(
    () => ({
      home: marketingRef,
      'who-we-are': whoWeAreRef,
      'our-services': servicesRef,
      'our-projects': projectsRef,
      'latest-blog': blogRef,
      'we-bring': weBringRef,
    }),
    [marketingRef, whoWeAreRef, servicesRef, projectsRef, blogRef, weBringRef],
  )

  type SectionKey = keyof typeof sectionRefs

  const scrollToSection = useCallback(
    (section: SectionKey) => {
      const ref = sectionRefs?.[section]

      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [sectionRefs],
  )

  useEffect(() => {
    const refKey = router?.query?.[KEY_REF_HEADER_MENU]

    if (refKey) {
      scrollToSection(refKey as SectionKey)
    }
  }, [router, router?.query?.[KEY_REF_HEADER_MENU], scrollToSection])

  return (
    <main>
      <Head>
        <title>{t('home-page')}</title>
        <meta name="keywords" content={t('compose-digital')} />
        <meta name="description" content={t('compose-digital-is-a-digital')} />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Social TODO */}
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:type" content={t('compose-digital-is-a-digital')} />

        {/* Social TODO */}
        {/* twitter */}
        <meta name="twitter:card" content={t('home-compose-digital')} />
        <meta name="twitter:site" content="@your_x_handle" />
        <meta name="twitter:creator" content="your_creator_handle" />
        <meta name="twitter:title" content={t('home-compose-digital')} />
        <meta name="twitter:description" content={t('compose-digital-is-a-digital')} />

        {/* Social TODO */}
        {/* facebook */}
        <meta property="og:type" content={t('home-compose-digital')} />
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:title" content={t('home-compose-digital')} />
        <meta property="og:site_name" content="@your_facebook_handle" />
        <meta property="og:description" content={t('compose-digital-is-a-digital')} />
      </Head>

      <section ref={marketingRef}>
        <TheDigitalMarketing />
      </section>
      <Products />
      <PopularGenre />
      <section ref={whoWeAreRef}>
        <WhoWeAre />
      </section>
      <section ref={servicesRef}>
        <Services />
      </section>
      <section ref={weBringRef}>
        <WeBring />
      </section>
      <section ref={blogRef}>
        <LatestBlog />
      </section>
    </main>
  )
}

export default Home
