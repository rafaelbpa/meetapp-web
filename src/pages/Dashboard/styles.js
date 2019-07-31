import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      color: #fff;
      height: 42px;
      width: 172px;
    }

    strong {
      color: #fff;
      font-weight: normal;
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
    font-weight: normal;
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
