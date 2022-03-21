document.addEventListener("alpine:init", () => {
  Alpine.data("Articles", () => ({
    articles: [],
    name: "articles",
    userId: 1,
    fethcArticles: async function () {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
      );
      const data = await res.json();
      this.articles.unshift(...data.reverse());
      this.userId++;
    },
  }));
});
