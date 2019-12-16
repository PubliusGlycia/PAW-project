const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchComment = async (board_id, list_id, card_id) => {
  const commentResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const commentJSON = await commentResponse.json()
  return commentJSON.comment;
};

export const addComment = async (board_id, list_id, card_id, email, comment) => {
  const commentResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({comment: { email, comment, card_id } })),
    });
  const commentJSON = await commentResponse.json();
  return commentJSON.comment;
};

export const updateComment = async (board_id, list_id, card_id, id, email, comment) => {
  const commentResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ comment: { email, comment } })),
  });
  const commentJSON = await commentResponse.json();
  return commentJSON.comment;
};

export const removeComment = async (board_id, list_id, card_id, id) => {
  const commentResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const commentJSON = await commentResponse.json();
  return commentJSON.comment;
};