import request, { getServerImgHttp } from "../utils/request"

export default function getHomeData() {
  return request({
    url: '/home/multidata',
    method: 'get'
  })
}

export function getServerImg() {
  return getServerImgHttp({
    url: "/bgimg",
    method: 'get'
  })
}
