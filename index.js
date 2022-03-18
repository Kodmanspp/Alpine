document.addEventListener("alpine:init", () => {
  Alpine.data("data", () => ({
    articles: [],
    name: "articles",
    viewCount: 10,
    async init() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((item) => item.json())
        .then((item) => this.articles = item);
    },
  }));
});
