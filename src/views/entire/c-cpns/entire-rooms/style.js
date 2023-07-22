import styled from 'styled-components'

export const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 120px;

  .title {
    font-size: 24px;
    font-weight: 600;
    padding: 10px 5px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
