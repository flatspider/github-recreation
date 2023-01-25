// Create a fetch request.

// Get information/object from GitHub

// Feed object through Handlebars and generate HTML for display

// Inject HTML into web page

// This is the locations of the repos: https://api.github.com/users/flatspider/repos

// Get the readme doing this: https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md

// https://raw.githubusercontent.com/flatspider/flatspider/README.md

// Moments.js for time

// Fuzzy search for repos data

const BASE_URL = "https://api.github.com/users/";

const username = "flatspider";

var organizations_URL = `${BASE_URL}${username}/orgs`;

// Fetch the basic user information
fetch(`${BASE_URL}${username}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateHTML(data);
    //console.log(data);
  });

function generateHTML(data) {
  console.log(data);
  const source = document.querySelector("#left-side-info").innerHTML; // Targeting the script source and template
  const template = Handlebars.compile(source);

  const context = data; // This is not required. We can work directly with the data object.

  const html = template(data); // This calls the Handlebars template and allows the index.html to loop through it.

  console.log(html);

  document.querySelector(".gitTest").insertAdjacentHTML("afterbegin", html);
}

function generateRepoHTML(data) {
  console.log(data);
  const source = document.querySelector("#right-side-info").innerHTML; // Targeting the script source and template
  const template = Handlebars.compile(source);

  const context = data; // This is not required. We can work directly with the data object.

  const html = template(data); // This calls the Handlebars template and allows the index.html to loop through it.

  console.log(html);

  document.querySelector(".repoTest").insertAdjacentHTML("afterbegin", html);
}

// https://api.github.com/users/flatspider/repos

fetch(`${BASE_URL}${username}/repos`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateRepoHTML(data);
    console.log(data);
  });

// Fetch the users repo information
/*
fetch(`${organizations_URL}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateHTML(data);
  });
*/
