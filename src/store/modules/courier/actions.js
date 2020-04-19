export function sendAvatarId(id) {
  return {
    type: '@courier/SEND_AVATAR_ID',
    payload: { contains: true, id },
  };
}

export function loadCourier() {
  return {
    type: '@courier/LOAD',
  };
}

export function sendAvatarUrl(url) {
  return {
    type: '@courier/SEND_AVATAR_URL',
    payload: { url },
  };
}
