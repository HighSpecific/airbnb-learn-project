import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map((item) => item.title)

  function searchBarClickHandle() {
    searchBarClick && searchBarClick()
  }

  const searchBar = (
    <div className="search-bar" onClick={searchBarClickHandle}>
      <div className="text">搜索房源和体验</div>
      <div className="icon">
        <IconSearchBar />
      </div>
    </div>
  )

  const searchDetail = (
    <div className="search-detail">
      <SearchTabs titles={titles} tabClick={setTabIndex} />
      <div className="infos">
        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
      </div>
    </div>
  )

  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        {searchBar}
      </CSSTransition>
      <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit={true}>
        {searchDetail}
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func,
}

export default HeaderCenter
