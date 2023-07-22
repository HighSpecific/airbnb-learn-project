import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  /* 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )

  /* 事件处理 */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <EntireRoomsWrapper>
      <div className="title">共{totalCount}处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClickHandle} />
          )
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
