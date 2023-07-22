import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rate from '@mui/material/Rating'
import { Carousel } from 'antd'
import { RoomItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const carouselRef = useRef()

  /* 事件处理逻辑 */
  function controlBtnClickHandle(event, isNext = true) {
    isNext ? carouselRef.current.next() : carouselRef.current.prev()

    // 最新索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const urlsLength = itemData.picture_urls.length
    if (newIndex < 0) newIndex = urlsLength - 1
    if (newIndex > urlsLength - 1) newIndex = 0
    setSelectIndex(newIndex)

    event.stopPropagation()
  }
  function itemClickHandle() {
    itemClick && itemClick(itemData)
  }

  // 子元素赋值
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlBtnClickHandle(e, false)}>
          <IconArrowLeft />
        </div>
        <div className="btn right" onClick={(e) => controlBtnClickHandle(e, true)}>
          <IconArrowRight />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={`slind-${index}`} className="dot-item">
                <span className={classNames('dot', { active: selectIndex === index })}></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel ref={carouselRef} dots={false}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={itemData.picture_url} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper
      $verifycolor={itemData?.verify_info?.text_color || '#39567a'}
      $itemwidth={itemWidth}
      onClick={itemClickHandle}>
      <div className="inner">
        {!itemData?.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
}

export default RoomItem
