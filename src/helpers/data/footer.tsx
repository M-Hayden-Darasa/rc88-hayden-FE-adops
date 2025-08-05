import { MenuFootersInterface, MultipleLanguageInterface, SocicalsInterface } from '@/models/footer'

const footerMenus: MenuFootersInterface[] = [
  {
    key: 'links',
    menus: [
      {
        key: 'home',
      },
      {
        key: 'about',
      },
      {
        key: 'services',
      },
      {
        key: 'projects',
      },
    ],
  },
  {
    key: 'support',
    menus: [
      {
        key: 'contact',
      },
      {
        key: 'book-a-call',
      },
      {
        key: 'blog',
      },
      {
        key: 'careers',
      },
    ],
  },
  {
    key: 'social-media',
    menus: [
      {
        key: 'instagram',
      },
      {
        key: 'twitter',
      },
      {
        key: 'facebook',
      },
      {
        key: 'behance',
      },
    ],
  },
]

const footerSocicals: SocicalsInterface[] = [
  {
    key: 'instal',
    icon: '/icons/common/ic-insta.svg',
  },
  {
    key: 'youtube',
    icon: '/icons/common/ic-youtube.svg',
  },
  {
    key: 'facebook',
    icon: '/icons/common/ic-facebook.svg',
  },
  {
    key: 'rc',
    icon: '/icons/common/ic-rc.svg',
  },
]

const multipleLanguages: MultipleLanguageInterface[] = [
  {
    key: 'eng',
    icon: '/icons/common/ic-eng-flag.svg',
    value: 'en',
    label: 'english',
  },
  {
    key: 'vietnam',
    icon: '/icons/common/ic-vietnamese-flag.svg',
    value: 'vi',
    label: 'vietnamese',
  },
]

export { footerMenus, footerSocicals, multipleLanguages }
