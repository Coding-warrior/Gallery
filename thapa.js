const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

//getting post from api
async function getpost() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );
  const data = await response.json();

  data.forEach(function (value, index) {
    const htmldata = `<div class="posts">
      <p class="post-id">${value.id}</p>
      <h2 class="title">${value.title}</h2>
      <p class="post-info">
        ${value.body}
      </p>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmldata);
  });
}

getpost();

// const showData = () => {
//   setTimeout(() => {
//     pageCount++;
//     getpost();
//   }, 300);
// };

function showData() {
  setTimeout(() => {
    pageCount++;
    getpost();
  }, 300);
}

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    showData();
  }
});
