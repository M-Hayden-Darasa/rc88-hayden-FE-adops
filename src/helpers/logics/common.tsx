import { BACKSTAGE_DOMAIN, BACKSTAGE_NEWS, BACKSTAGE_POLICY } from '../constants/common.constant'

function handleRedirectBackstage() {
  window.location.href = BACKSTAGE_DOMAIN
}

function handleRedirectBackstageNew() {
  window.location.href = BACKSTAGE_NEWS
}

function handleRedirectBackstagePolicy() {
  window.location.href = BACKSTAGE_POLICY
}

export { handleRedirectBackstage, handleRedirectBackstageNew, handleRedirectBackstagePolicy }
