import styled from 'styled-components';
import { lighten } from 'polished';
import { Form, Input } from '@rocketseat/unform';

export const Content = styled.div`
  margin: 20px 20px;
  background: #ffffff;
  height: 425px;
  width: 360px;
  border-radius: 5px;
`;

export const Img = styled.img`
  height: 44px;
  width: 252.86px;
  margin-left: 51px;
  margin-top: 60px;
  margin-bottom: 0;
`;

export const InputContent = styled.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: start;
  margin-bottom: 10px;
`;

export const Text = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Inputs = styled(Input)`
  border: 1px solid #dddddd;
  margin: 5px 0;
  border-radius: 4px;
  height: 45px;
  width: 300px;
  padding: 0 15px;
  color: #999999;

  &::placeholder {
    color: #999999;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 45px;
  margin: 5px 30px;
  border: 0;
  border-radius: 5px;
  background: #7d40e7;
  color: #ffffff;
  font-weight: bold;
  transition: background 0.2;

  &:hover {
    background: ${lighten(0.1, '#7d40e7')};
  }
`;
