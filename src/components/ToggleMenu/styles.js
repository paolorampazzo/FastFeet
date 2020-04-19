import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ItemMenu = styled.div`
  color: #999999;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin: 5px 10px;

  & + div {
    border-top: 1px solid #eeeeee;
    padding-top: 5px;
  }
`;

export const ItemText = styled.button`
  color: #999999;
  position: relative;

  margin-left: 7.3px;
  font-size: 16px;

  background: none;
  border: 0;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${(props) => (props.problemas ? '-98px' : '-63px')};
  top: 20px;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  width: ${(props) => (!props.problemas ? '150px' : '220px')};

  padding: 10px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    left: ${(props) =>
      props.problemas ? css`calc(100% - 118px)` : css`calc(50% - 7.5px)`};
    top: -8px;
    width: 0;
    height: 0;
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
    border-bottom: 7.5px solid #ffffff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;
