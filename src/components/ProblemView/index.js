import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { Container, Content } from './styles';

import { showProblem } from '../../store/modules/problem/actions';

export default function View() {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.problem.description);

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          dispatch(showProblem({ show: false }));
        }}
      >
        <Content>
          <h1>VISUALIZAR PROBLEMA</h1>
          <p>{description}</p>
        </Content>
      </OutsideClickHandler>
    </Container>
  );
}
