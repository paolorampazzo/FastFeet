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

export const Table = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: 500px;
  width: 85vw;
`;

export const THeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 22px 24px;
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

export const Pages = styled.div`
  margin: 20px auto 10px;
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
