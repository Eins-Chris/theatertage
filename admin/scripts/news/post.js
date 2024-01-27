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
  document.getElementById('title').innerHTML = "Theatertage - News: " + post[NewsRow.Headline];

  //insert blogpost contents
  document.getElementById('headline').innerHTML = post[NewsRow.Headline];
  document.getElementById('date').innerHTML = dateFormat.format(post[NewsRow.Date]);
  //image
  for (let i = 1; i <= 4; i++) {
    var img = document.getElementById('img'+i);
    img.src = "img/" + ID + "/" + post[NewsRow[`Img${i}`]];
    document.getElementById('head'+i).innerHTML = post[NewsRow[`Head${i}`]];
    document.getElementById('text'+i).innerHTML = post[NewsRow[`Text${i}`]];
    document.getElementById('author'+i).innerHTML = "~" + post[NewsRow[`Author${i}`]];
  }
  document.getElementById('summary').innerHTML = getSummary(post);
  document.getElementById('author5').innerHTML = "~" + post[NewsRow.Author5];
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