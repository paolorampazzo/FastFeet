import styled from 'styled-components';
import { lighten } from 'polished';
import { Input } from '@rocketseat/unform';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 27px auto;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
  margin-bottom: 34px;
`;

export const FormWrapper = styled.div`
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  border-radius: 4px;

  padding: 0 12px;
  width: min(900px, 80vw);

  background: #ffffff;

  span {
    font-size: 14px;

    font-weight: bold;
    color: #444444;
    margin-bottom: 9px;
  }

  .first-line {
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 26px auto 0;

    section {
      display: flex;

      flex-direction: column;
      width: 45%;
    }
  }
  .second-line {
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 26px auto 0;

    .rua {
      display: flex;
      flex-direction: column;
      width: 60%;
    }

    .numero {
      display: flex;
      flex-direction: column;
      width: 15%;
    }

    .complemento {
      display: flex;
      flex-direction: column;
      width: 20%;
    }
  }
  .third-line {
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 26px auto 16px;

    .cidade {
      display: flex;
      flex-direction: column;
      width: 45%;
    }

    .estado {
      display: flex;
      flex-direction: column;
      width: 25%;
    }

    .cep {
      display: flex;
      flex-direction: column;
      width: 25%;
    }
  }

  .warning {
    align-self: center;
    margin: 20px auto 10px;
    color: #999999;
    font-size: 16px;
    font-weight: bold;
  }

  .foto {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto 32px;

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Inputs = styled(Input)`
  height: 45px;
  width: 100%;
  padding: 0 15px;
  color: #999999;
  border: 1px solid #dddddd;
  border-radius: 4px;

  &::placeholder {
    color: #999999;
  }
`;

export const GoBack = styled.div`
  background: #cccccc;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 16px;
  width: 112px;
  height: 36px;

  border: 0;
  border-radius: 5px;

  color: #ffffff;
  transition: background 0.2;

  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, '#cccccc')};
  }
`;

export const Save = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 36px;

  border: 0;
  border-radius: 5px;
  background: #7d40e7;
  color: #ffffff;
  transition: background 0.2;

  &:hover {
    background: ${lighten(0.05, '#7d40e7')};
  }
`;

export const Text = styled.div`
  margin: 0 10px;
  font-weight: bold;
  font-size: 14px;
`;
