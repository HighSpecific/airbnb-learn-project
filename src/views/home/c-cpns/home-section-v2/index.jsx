import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  /* 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map((item) => item.name)

  // useEffect(() => {}, [infoData])

  /* 事件函数处理 */
  const tabClickHandle = useCallback((item, index) => {
    setName(item)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2
