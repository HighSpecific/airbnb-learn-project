import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [showList, setShowList] = useState(true)

  // 当图片浏览器展示出来时，让滚动的功能失效
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  /* 事件监听 */
  function closeBtnClickHandle() {
    closeClick && closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper $isNext={isNext} $showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft />
          </div>
          <div className="btn right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} classNames="fade" timeout={200}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    key={`pbl-${index}`}
                    className={classNames('item', { active: currentIndex === index })}
                    onClick={() => bottomItemClickHandle(index)}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
}

export default PictureBrowser
