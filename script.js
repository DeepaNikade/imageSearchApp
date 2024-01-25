let apikey = "N9sxmz4d1M39YnIgHHzKuqbN_7vp-krg8M3QHkIrm9k";

let btn = document.getElementById("btn");
let input = document.getElementById("search");
let imageconatiner = document.querySelector(".images-conatiner");
let showmore = document.querySelector("#showmore");



async function imageSearches() {
  inputData = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${inputData}&client_id=${apikey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page === 1) {
    imageconatiner.innerHTML = "";
  }

  results.forEach((photo) => {
    const image = document.createElement("img");
    image.src = photo.urls.regular;
    imageconatiner.appendChild(image);
  });

  page++;

  showmore.style.display = "block";

  // Hide the "Show More" button if there are no more pages to load
  if (page > data.total_pages) {
    showmore.style.display = "none";
  }
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  page = 1; // Reset page when a new search is initiated
  imageSearches();
});

showmore.addEventListener("click", function () {
  imageSearches();
});
showmore.style.display = "none";