// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /* 定义内部状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef(0)

  /* 组件渲染完毕，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 可视区域的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance

    setShowRight(totalDistance > 0)
  }, [props.children])

  /* 事件处理逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`

    setPosIndex(newIndex)

    // 是否继续显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div ref={scrollContentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
