const container = document.querySelector(".container");
let limit = 25;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?_limit=${limit}_page${pageCount}`
  );
  const data = await res.json();
  data.map(() => {
    const htmldata = ` <div class="posts">
      <p class="post-id">${postCount}</p>
      <h2 class="title">MASAI ITEM NO ${postCount++}</h2>
    </div>`;
    container.insertAdjacentHTML("beforeend", htmldata);
  });
};
getPost();

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    getPost();
  }
});
