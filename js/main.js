// GET THE REFERENCES
const container = document.getElementById("content");
const links = document.querySelectorAll("nav a");
let url = "./partials/home.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
  /*
  IMPORTANT NOTES:
  loadContent RUNS EVERY TIME A LINK IS CLICKED.
  loadContent REQUIRES THE INPUT. THIS INPUT IS
  THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
  EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
  THE UPDATED PATH TO THE REQUESTED CONTENT.
  */

  fetch(urlFeed)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => {
      console.log("Error loading content:", error);
    });
};
// CLOSE loadContent FUNCTION

// CALL loadContent WITH THE CURRENT VALUE OF url
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
const selectContent = (e) => {
  // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
  e.preventDefault();

  // GET THE VALUE OF href ATTRIBUTE
  const href = e.target.getAttribute("href");

  // CALL loadContent WITH href VALUE
  loadContent(href);
};
// CLOSE selectContent FUNCTION

// REGISTER links FOR CLICK EVENT
links.forEach((link) => {
  link.addEventListener("click", selectContent);
});