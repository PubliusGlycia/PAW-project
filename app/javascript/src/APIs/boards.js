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