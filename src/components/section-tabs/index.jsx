import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick && tabClick(item, index)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={`stab-${index}`}
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => itemClickHandle(item, index)}>
              {item}
            </div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
}

export default SectionTabs
