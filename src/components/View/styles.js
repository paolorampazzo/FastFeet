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
  /* height: 353px; */
  height: auto;

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

export const Encomenda = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  section {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    h2 {
      font-size: 16px;
      color: #999;
    }
  }
`;

export const Datas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto;

  border-top: 1px solid #eeeeee;

  padding-top: 10px;

  h2 {
    font-weight: bold;
    font-size: 16px;
    color: #666666;
  }

  span {
    margin-left: 5px;
  }

  section {
    display: flex;
    align-items: center;
    align-items: row;
    padding-top: 2px;
  }
`;

export const Assinatura = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  border-top: 1px solid #eeeeee;

  padding-top: 10px;

  h1 {
    margin-bottom: 6px;
  }

  section {
    width: 95%;
    height: 100%;

    margin: 0 auto;

    img {
      max-height: 70px;
      width: 100%;
    }
  }
`;

export const Problem = styled.div`
  margin: 0 20px;
`;

export const NoSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #ddd;
  font-size: 16px;

  width: 80%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  height: 70px;

  margin: 0 auto;

  border-radius: 4px;

  h1 {
    color: #ddd;
    margin-left: 10px;
    font-weight: normal;
    font-size: 18px;
  }
`;
