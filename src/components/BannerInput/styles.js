import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;
  width: 100%;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 100%;
      border-radius: 4px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #000;
    }

    .add_image {
      width: 100%;
      height: 300px;
      border-radius: 4px;
      background: #000;
      opacity: 0.4;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        color: #fff;
        opacity: 0.6;
        height: 69px;
      }

      span {
        color: #fff;
        opacity: 0.6;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        align-self: center;
        font-weight: bold;
      }
    }

    input {
      display: none;
    }
  }
`;
