const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchLists = async (board_id) => {
	const response = await fetch(`/boards/${board_id}/lists`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const listsJSON = await response.json()
  return listsJSON.lists;
};

export const addList = async (board_id, title) => {
  const listResponse = await fetch(`/boards/${board_id}/lists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({list: { title, board_id } })),
    });
  const listJSON = await listResponse.json();
  return listJSON.list;
};

export const updateList = async (board_id, id, title) => {
  const listResponse = await fetch(`/boards/${board_id}/lists/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ list: { title } })),
  });
  const listJSON = await listResponse.json();
  return listJSON.list;
};