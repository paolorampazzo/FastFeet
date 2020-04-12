import styled from 'styled-components';
import { lighten } from 'polished';
import { Form, Input } from '@rocketseat/unform';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
  margin-bottom: 34px;
`;

export const Forms = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputsDesign = styled.div`
  width: 237px;
  height: 36px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  margin: 10px 0 10px 16px;
`;

export const Inputs = styled(Input)`
  border: 0;
  margin: 9px 0;
  height: 19px;
  width: 180px;
  padding: 0 15px;
  color: #999999;

  &::placeholder {
    color: #999999;
  }
`;

export const Add = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 142px;
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

export const Table = styled.div``;

export const THeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 22px 24px;
`;

export const TTitle = styled.div`
  margin: 0;
  width: ${(props) => props.width};
  font-size: 16px;
  font-weight: bold;
  color: #444444;
`;

export const TContent = styled.div``;

export const TItem = styled.li`
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 57px;
  align-items: center;

  padding: 0 22px;

  margin-bottom: 21px;
  border-radius: 4px;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.margin};
  font-size: 16px;
  color: #666666;
`;

export const Actions = styled.button`
  margin: 0;
  width: ${(props) => props.width};
  border: 0;
  background: none;
  font-size: 24px;
  color: #c6c6c6;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  height: 25px;
  width: ${(props) => (props.status === 'CANCELADA' ? '110px' : '99px')};

  border-radius: 12px;
`;

export const StatusText = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin: 2px 5px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17.5px;
  height: 35px;
  width: 35px;
  margin-right: 12px;
  background: ${(props) => lighten(0.5, props.color)};
  color: ${(props) => props.color};

  font-size: 16px;
`;

export const ImgAvatar = styled.div`
  display: flex;
  margin-right: 12px;
  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
`;

export const Filtros = styled.div`
  display: flex;

  background: #eee;
  border-radius: 10px;

  height: 36px;
`;

export const Filtro = styled.button`
  opacity: ${(props) => (props.active ? 1.0 : 0.2)};
  border: 0;
  background: none;
  margin: 0 50px;
`;
