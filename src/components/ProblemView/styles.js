import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  margin: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 25px;
  border-radius: 4px;
  width: 450px;

  min-height: 425px;

  background: #ffffff;

  h1 {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    margin-bottom: 4px;
  }

  span {
    font-size: 16px;
    color: #666666;
    margin: 2px 0;
    height: 100%;
  }
`;
