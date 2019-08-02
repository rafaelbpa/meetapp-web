import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 41px;

    > span {
      color: #fff;
      font-size: 32px;
      line-height: 41px;
      font-weight: bold;
    }

    div {
      button {
        border: 0;
        border-radius: 4px;
        height: 42px;
        color: #fff;
        margin-left: 15px;
        padding: 0 20px;
        font-weight: bold;

        div {
          display: flex;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }
      }
      .edit {
        background: #4dbaf9;
      }
      .cancel {
        background: #d44059;
      }
    }
  }

  img {
    margin-bottom: 25px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 30px;
    font-weight: bold;
  }
`;
export const MeetupDetails = styled.div`
  display: flex;

  div {
    color: #fff;
    opacity: 0.6;
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      line-height: 20px;
      margin-right: 53px;
      margin-left: 10px;
    }
  }
`;
