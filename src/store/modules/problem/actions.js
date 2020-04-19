export function showProblem({ description, show }) {
  return {
    type: '@problem/SHOW_DETAILS',
    payload: { description, show },
  };
}
