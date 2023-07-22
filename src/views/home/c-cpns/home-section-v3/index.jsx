import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <RoomItem key={`hsli-${index}`} itemData={item} itemWidth="20%" />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
