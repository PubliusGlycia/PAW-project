const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchBoards = async () => {
  const boardsResponse = await fetch('/boards', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  const boardsJSON = await boardsResponse.json();
  return boardsJSON.boards;
};

export const addBoard = async (title) => {
    const boardResponse = await fetch('/boards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({board: { title } })),
    });
    const board = await boardResponse.json();
    return board.board;
}

export const removeBoard = async id => {
  const boardResponse = await fetch(`/boards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const board = await boardResponse.json();
  return board.board;
};

export const updateBoard = async ( id, title ) => {
  const boardResponse = await fetch(`/boards/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ board: { title } })),
  });
  const boardJSON = await boardResponse.json();
  return boardJSON.board;
};