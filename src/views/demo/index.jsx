import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz']
  const [selectIndex, setSelectIndex] = useState(0)

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) {
      newIndex = names.length - 1
    }
    if (newIndex > names.length - 1) {
      newIndex = 0
    }
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => toggleClickHandle(false)}>上一个</button>
        <button onClick={() => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
