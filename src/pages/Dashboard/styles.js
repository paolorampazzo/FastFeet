import styled from 'styled-components';
import { lighten } from 'polished';
import { Form, Input } from '@rocketseat/unform';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 34px auto;
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
  flex-wrap: wrap;
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
  width: 190px;
  padding: 0 15px;
  color: #999999;

  &::placeholder {
    color: #999999;
  }
`;

export const Add = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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

export const Table = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: 500px;
  width: 85vw;
`;

export const THeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 24px 22px;
  width: 100%;
`;

export const TTitle = styled.div`
  margin: 0;
  width: ${(props) => props.width};

  font-size: 16px;
  font-weight: bold;
  color: #444444;
`;

export const TContent = styled.div`
  width: 100%;
`;

export const TItem = styled.li`
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 57px;
  align-items: center;

  padding: 0 22px;
  flex-wrap: nowrap;
  margin-bottom: 21px;
  border-radius: 4px;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;

  margin: 0;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxwidth};
  margin-left: ${(props) => props.margin};
  font-size: max(min(16px, 1.5vw), 10px);
  color: #666666;
  overflow: ${(props) => (props.overflow ? 'inherit' : 'hidden')};
  padding: 0 4px;
`;

export const Actions = styled.button`
  /* margin: 0;
  width: ${(props) => props.width}; */
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

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #eee;
  border-radius: 10px;
  min-width: 30vw;
  max-width: 50vw;
  height: 36px;
`;

export const Filtro = styled.button`
  opacity: ${(props) => (props.active ? 1.0 : 0.4)};
  border: 0;
  background: none;
`;
export const Pages = styled.div`
  margin: 10px auto 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background: ${lighten(0.35, '#7d40e7')};
  border-radius: 4px;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7d40e7;

  span {
    margin: 0 20px 5px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const PageButton = styled.button`
  background: none;
  border: 0;
`;
