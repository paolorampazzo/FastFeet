import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: blue;
    }

    input {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;

  margin: 20px auto;

  span {
    color: #dddddd;
    font-size: 16px;
    font-weight: bold;
  }

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23DDDDDDFF' stroke-width='2' stroke-dasharray='17%2c 17' stroke-dashoffset='73' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 100px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: auto;

  margin-right: 12px;
  background: ${(props) => lighten(0.5, props.color)};
  color: ${(props) => props.color};

  border: ${(props) => css`2px dashed ${props.color}`};
  font-size: 48px;
`;
