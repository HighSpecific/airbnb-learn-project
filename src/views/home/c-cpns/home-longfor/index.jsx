import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <LongForItem key={`hli-${index}`} itemData={item} />
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
}

export default HomeLongFor
