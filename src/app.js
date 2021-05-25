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

  return domainList;
};

const formGenerateDomains = arr => {
  return arr.map(
    str =>
      //   Hay que hacer esta parte más dinámica
      `<li>
            <i class="far fa-check-circle mr-3"></i>
                ${str.replace("es.", ".es")}
        </li>`
  );
};

const formSplitDomainsList = splitArr =>
  `<div class = "col-6 p-0"> ${splitArr.join("")} </div>`;

const splitDomainsList = arr => {
  let firstPartArr = arr.slice(0, arr.length / 2);
  let secondPartArr = arr.slice(arr.length / 2, arr.length);

  return (
    formSplitDomainsList(firstPartArr) + formSplitDomainsList(secondPartArr)
  );
};

const generateAndInsertANewDomainInDomainsList = domIdInput => {
  console.log("domIdInput ---> ", domIdInput);
};

const hideShowRegards = (domIdHideShow, domIdGenerate) => {
  //Para poder trabajar con las clases del DOM como si fuera un array
  const classes = [...domIdHideShow.classList];

  if (classes.includes("d-flex")) {
    domIdHideShow.classList.remove("d-flex");
    domIdHideShow.classList.add("d-none");
  } else {
    domIdHideShow.classList.remove("d-none");
    domIdHideShow.classList.add("d-flex");
    domIdGenerate.innerHTML =
      "You need to click on the button to show the domains list";
  }
};

window.onload = () => {
  document.querySelector("#btnShowHideDomain").addEventListener("click", () => {
    document.querySelector("#listContainer").style.marginTop = "2rem";

    document.querySelector(
      "#domain"
    ).innerHTML = `<div class = "row p-2">${splitDomainsList(
      formGenerateDomains(generateDomains(pronoun, adj, noun, extensions))
    )}</div>`;

    let regards = document.querySelector("#regards");
    let initText = document.querySelector("#domain");

    hideShowRegards(regards, initText);
  });

  document.querySelector("#btnNewDomain").addEventListener("click", () => {
    let inputDom = document.querySelector("input");
    generateAndInsertANewDomainInDomainsList(inputDom);
  });
};
