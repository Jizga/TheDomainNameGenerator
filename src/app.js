import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoones"];
const extensions = [".com", ".io"];

const generateDomains = (arr1, arr2, arr3, arr4) => {
  let domainList = [];

  arr1.map(pronoun =>
    arr2.map(adjective =>
      arr3.map(noun =>
        arr4.map(extension =>
          domainList.push(pronoun + adjective + noun + extension)
        )
      )
    )
  );

  return domainList.map(
    str =>
      //   Hay que hacer esta parte más dinámica
      `<li>
            <i class="far fa-check-circle mr-3"></i>
                ${str.replace("es.", ".es")}
        </li>`
  );
};

const hideShowRegards = () => {
  //Uso clases e id ya que las clases van a variar
  let regards = document.querySelector("#regards");
  //Para poder trabajar con las clases del DOM como si fuera un array
  const classes = [...regards.classList];

  if (classes.includes("d-flex")) {
    regards.classList.remove("d-flex");
    regards.classList.add("d-none");
  } else {
    regards.classList.remove("d-none");
    regards.classList.add("d-flex");
    document.querySelector("#domain").innerHTML =
      "You need to click on the button to show the domains list";
  }
};

const splitDomainsList = arr => {
  let firstPartArr = arr.slice(0, arr.length / 2);
  let secondPartArr = arr.slice(arr.length / 2, arr.length);

  return `<div class = "col-6 p-0">
            ${firstPartArr}
          </div>
          <div class = "col-6 p-0">
            ${secondPartArr}
          </div>`;
};

window.onload = () => {
  document.querySelector("#btnShowHideDomain").addEventListener("click", () => {
    document.querySelector("#listContainer").style.marginTop = "2rem";

    document.querySelector(
      "#domain"
    ).innerHTML = `<div class = "row p-2">${splitDomainsList(
      generateDomains(pronoun, adj, noun, extensions).join(" ")
    )}</div>`;

    hideShowRegards();
  });
};
