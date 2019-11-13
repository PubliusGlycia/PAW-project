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
