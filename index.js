document.addEventListener("alpine:init", () => {
  Alpine.data("data", () => ({
    articles: [],
    name: "articles",
    userId: 1,
    async init() {
      if (this.articles.length <= 0) {
        this.userId = 1;
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
        )
          .then((item) => item.json())
          .then((item) => {
            this.articles = item;
          });
      }
    },
    getNewArticles: async function () {
      if (this.articles === []) {
        this.init();
      } else {
        this.userId += 1;
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
        )
          .then((item) => item.json())
          .then((item) => {
            this.articles.push(...item);
          }).catch(err => {
            alert("not new articles");
          })
      }
      console.log(this.articles)
    },
  }));
});
