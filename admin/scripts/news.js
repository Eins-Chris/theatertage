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
  Text1: 6,
  Text2: 7,
  Text3: 8,
  Text4: 9,
  Summary: 10,
}

const dateFormat = Intl.DateTimeFormat("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short"
})
