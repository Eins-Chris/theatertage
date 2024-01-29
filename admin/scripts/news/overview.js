async function createNewsOverview() {
  const data = await readFile();

  console.log(data);

  // skip first row (titles/names)
  for (let i = 1; i < data.length; i++) {
    createNewsOverviewFor(i, data[i]);
  }
}

const newsContainer = document.getElementById("news");

function createNewsOverviewFor(index, post) {
  // create element & load preset
  const element = $("<div>");
  const jqElement = $(element);
  jqElement.load("/admin/preset/news_overview.html", () => {
    const group = jqElement.find(".group");

    group.find(".title").text(post[NewsRow.Headline])
    group.find(".date").text(dateFormat.format(post[NewsRow.Date]))
    group.attr("href", `./post?ID=${index}`)

    for (let i = 1; i < 5; i++) {
      group.find(`#${i}`).attr("src", `/news/post/img/${index}/${post[NewsRow[`Img${i}`]]}`)
    }
    
    $(newsContainer).append(group);
  })
}

createNewsOverview().then(undefined);
