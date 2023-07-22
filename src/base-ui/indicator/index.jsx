import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props

  const contentRef = useRef()

  useEffect(() => {
    // 获取selectIndex对应item的offsetLeft和宽度
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 获取content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 获取selectIndex需要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 特殊情况处理
    if (distance < 0) distance = 0 // 左边特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边特殊情况处理

    contentRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div ref={contentRef} className="i-content">
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number,
}

export default Indicator
