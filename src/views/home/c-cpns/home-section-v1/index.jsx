import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </HomeSectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV1
