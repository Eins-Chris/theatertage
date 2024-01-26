var ID = new URLSearchParams(window.location.search).get('ID');

async function createNewsPost() {
  const data = await readFile();

  //prevent error with to high low ID values in url
  if (ID < 1 ) { ID = 1; siteReload(); }
  if (ID == 1) { document.getElementById('btn_back').remove(); }
  if (ID == data.length-1) { document.getElementById('btn_next').remove(); }
  if (ID > data.length-1) { ID = data.length-1; siteReload(); }

  setNewsPostFor(data[ID]);
}

function setNewsPostFor(post) {
  //setting title
  var title = "Theatertage - News: " + post[NewsRow.Headline];
  document.getElementById('title').innerHTML = title;
}

createNewsPost().then(undefined);

const urlpreset = "/news/post" + "?ID=";

function siteReload() {
  //setting url to new ID when changed
  window.location.href = urlpreset + ID;
}

function btn_back() {
  var newID = +ID - 1;
  window.location.href = urlpreset + newID;
}

function btn_next() {
  var newID = +ID + 1;
  window.location.href = urlpreset + newID;
}