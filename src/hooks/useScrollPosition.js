import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export default function useScrollPosition() {
  // 使用状态来记录滚动位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {
    const scrollHandle = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', scrollHandle)
    return () => {
      window.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  return {
    scrollX,
    scrollY,
  }
}
