import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      .new_btn {
        margin: 5px 0 0;
        height: 42px;
        width: 162px;
        background: #f94d6a;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            color: #fff;
            margin-left: 10px;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }

    > span {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
      line-height: 41px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 30px;

    .loading {
      display: flex;
      justify-content: center;
    }
  }
`;

export const MeetupList = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  margin-bottom: 10px;

  strong {
    color: #fff;
    font-size: 18px;
    line-height: 23px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: #fff;
      opacity: 0.6;
      font-size: 16px;
      line-height: 20px;
      font-weight: normal;
    }

    svg {
      margin-left: 40px;
    }
  }
`;
