const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchCards = async (board_id, list_id) => {
	const response = await fetch(`/boards/${board_id}/lists/${list_id}/cards`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const cardsJSON = await response.json()
  return cardsJSON.cards;
};

export const addCard = async (board_id, list_id, title, description) => {
  const cardResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({card: { title, description, list_id } })),
    });
  const cardJSON = await cardResponse.json();
  return cardJSON.card;
};

export const updateCard = async (board_id, list_id, id, title, description) => {
  const cardResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ card: { title, description } })),
  });
  const cardJSON = await cardResponse.json();
  return cardJSON.card;
};

export const removeCard = async (board_id, list_id, id) => {
  const cardResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const cardJSON = await cardResponse.json();
  return cardJSON.card;
};