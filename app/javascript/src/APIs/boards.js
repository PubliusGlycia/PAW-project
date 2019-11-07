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
  console.log("kikou", boardsJSON)
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