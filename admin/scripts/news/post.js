var ID = new URLSearchParams(window.location.search).get('ID');

async function createNewsPost() {
  const data = await readFile();

  //prevent error with to high low ID values in url
  if (ID <= 1) { document.getElementById('btn_back').remove(); ID = 1;}
  if (ID >= data.length-1) { document.getElementById('btn_next').remove(); ID = data.length-1;}
  //setting url to new ID bcs it may have changed

  setNewsPostFor(data[ID]);
}

function setNewsPostFor(post) {
  //setting title
  var title = "Theatertage - News: " + post[NewsRow.Headline];
  document.getElementById('title').innerHTML = title;
}

createNewsPost().then(undefined);


function btn_back() {
  window.location.href = formatURL("?ID=" + ID - 1);
}

function btn_next() {
  window.location.href = formatURL("?ID=" + ID + 1);
}