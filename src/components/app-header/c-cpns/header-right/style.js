import { styled } from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.textColor.primaryColor};
  font-weight: 600;
  margin-right: 22px;

  .btns {
    display: flex;
    color: ${(props) => (props.theme.isAlpha ? '#fff' : props.theme.textColor.primaryColor)};
    .btn {
      padding: 10px 10px;
      border-radius: 100px;
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? 'rgba(255, 255, 255, .5)' : '#f5f5f5'};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 300px;
    padding: 3px 12px;
    margin-left: 8px;
    color: #999;
    cursor: pointer;

    .avatar {
      margin-left: 10px;
    }

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 220px;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
      border-radius: 15px;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
