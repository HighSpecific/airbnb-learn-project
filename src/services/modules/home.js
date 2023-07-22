import jyRequest from '../request'

export function getHomeGoodPriceData() {
  return jyRequest.get({
    url: '/home/goodprice',
  })
}

export function getHomeHighScoreData() {
  return jyRequest.get({
    url: '/home/highscore',
  })
}

export function getHomeDiscountData() {
  return jyRequest.get({
    url: '/home/discount',
  })
}

export function getHomeHotRecommendData() {
  return jyRequest.get({
    url: '/home/hotrecommenddest',
  })
}

export function getHomeLongForData() {
  return jyRequest.get({
    url: '/home/longfor',
  })
}

export function getHomePlusData() {
  return jyRequest.get({
    url: '/home/plus',
  })
}
