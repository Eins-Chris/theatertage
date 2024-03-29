async function readFile() {
  return fetch('/admin/data/Posts.xlsx')
    .then(response => response.blob())
    .then(blob => readXlsxFile(blob))
    .then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      return rows;
    })

}

const NewsRow = {
  Date: 0,
  Headline: 1,
  Img1: 2,
  Img2: 3,
  Img3: 4,
  Img4: 5,
  Head1: 6,
  Head2: 7,
  Head3: 8,
  Head4: 9,
  Text1: 10,
  Text2: 11,
  Text3: 12,
  Text4: 13,
  Author1: 14,
  Author2: 15,
  Author3: 16,
  Author4: 17,
  Author5: 18,
  Summary: 19,
}

const dateFormat = Intl.DateTimeFormat("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short"
})

function getSummary(data) {
  // using NewsRow 19... as paragraphs for summary text
  var result = data[NewsRow.Summary];
  for (let i = NewsRow.Summary + 1; i < data.length; i++) {
    if (data[i] != null) {
      result += "<br>";
      result += data[i];
    }
  }
  return result;
}

function getSum(data) {
  // shortform of summary without <br>
  var result = getSummary(data);
  result = result.replace(/<br>/g, "\n");
  var newresult = result.substr(0, 500) + "..."; // 1000 =~ ca 150 words
  return newresult;
}