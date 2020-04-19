import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  height: 64px;
  padding: 0;
  width: 100%;
`;
export const Content = styled.div`
  margin: 0 auto;
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  aside {
    display: flex;
    flex-direction: column;
    margin: 6px 15px;
    padding: 0 30px;
  }

  img {
    height: 26px;
    width: 135px;
    margin: 19px 30px;
  }
`;

export const Titles = styled.div`
  display: flex;
  margin: 0 auto;
  height: 32px;
  flex-direction: row;
  align-items: center;
  border-left: 1px solid #dddddd;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => (props.current ? '#444444' : '#999999')};
  margin: 22px 21px;
`;
export const Admin = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  padding: 2px;
`;
export const Button = styled.button`
  font-size: 14px;
  color: #de3b3b;
  padding: 2px;
  background: none;
  border: 0;
  position: relative;
`;
