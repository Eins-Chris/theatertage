async function createNewsOverview() {
  const data = await readFile();

  // skip first row (titles/names)
  for (let i = 1; i < data.length; i++) {
    createNewsOverviewFor(data[i]);
  }
}

const newsContainer = document.getElementById("news");

function createNewsOverviewFor(post) {
  console.log(post)

  // create element & load preset
  const element = $("<div>");
  const jqElement = $(element);
  jqElement.load("/admin/preset/news_overview.html", () => {
    jqElement.find(".title").text(post[NewsRow.Headline])
    jqElement.find(".date").text(dateFormat.format(post[NewsRow.Date]))
    jqElement.find(".summary").text(post[NewsRow.Summary])

    $(newsContainer).append(jqElement.find(".entry"));
  })
}

createNewsOverview().then(undefined);
