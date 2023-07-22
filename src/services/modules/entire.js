import jyRequest from '../request'

export function getEntireRoomList(offset = 0, size = 20) {
  return jyRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size,
    },
  })
}
