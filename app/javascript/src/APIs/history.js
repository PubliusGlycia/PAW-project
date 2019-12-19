const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchHistory = async (board_id, list_id, card_id) => {
  const historyResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const historyJSON = await historyResponse.json()
  return historyJSON.history;
};

export const addHistory = async (board_id, list_id, card_id, email, created_at) => {
  const historyResponse = await fetch(`/boards/${board_id}/lists/${list_id}/cards/${card_id}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({history: { email, card_id, created_at } })),
    });
  const historyJSON = await historyResponse.json();
  return historyJSON.history;
};
