let page = 1;
const totalPages = 3; // Change this if you have more or fewer pages

function updatePage() {
  document.getElementById('page').src = `page${page}.jpg`;
}

function nextPage() {
  if (page < totalPages) {
    page++;
    updatePage();
  }
}

function prevPage() {
  if (page > 1) {
    page--;
    updatePage();
  }
}
