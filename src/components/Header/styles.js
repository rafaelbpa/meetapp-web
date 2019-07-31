import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      /* margin-right: 20px;
      padding-right: 20px; */
      height: 32px;
      width: 31px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      background: #d44059;
      border-radius: 4px;
      border: 0;
      height: 42px;
      width: 71px;
      margin-left: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-weight: bold;
      line-height: 18px;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 2px;
      line-height: 18px;
      font-size: 14px;
      color: #999;
    }
  }

  /* img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  } */
`;
