import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;
      line-height: 23px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      line-height: 23px;
      height: 200px;
      padding: 20px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    div {
      align-self: flex-end;

      button {
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
  }
`;
