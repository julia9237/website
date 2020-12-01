document.querySelector("#search-input").addEventListener("keydown", e => {
    if(e.key === "Enter") search();
});

function splitCursors(cursor) {
  let char = " ";

  cursor = cursor.split("\n")[0];

  if(cursor.match(/-/g)) char = "-";

  return cursor.toLowerCase().split(char);
}

function search() {
  const searchInput = document.querySelector("#search-input")
  const query = searchInput.value

  const cursors = document.querySelectorAll(".cursor");

  const response = document.querySelector("#search-response");
  
  response.className = "no-search";
  response.innerText = "...";
  searchInput.className = response.className;

  if(query.trim() === "") return

  for(let i = 0; i < cursors.length; i++) {

    const cursorsSplit = splitCursors(cursors[i].innerText);
    
    for(let j = 0; j < cursorsSplit.length; j++) {

      if(cursorsSplit[j] === query.toLowerCase().split(" ")[0]) {

        response.className = "good-search";
        response.innerText = "Cursor found";
        searchInput.className = response.className;

        cursors[i].scrollIntoView(true);
        return;
      };
    };
  };

  response.className = "bad-search";
  response.innerText = "Cursor not found";
  searchInput.className = response.className;

  return;
};
