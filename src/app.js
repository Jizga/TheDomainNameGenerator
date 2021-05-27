import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoones"];
let extensions = [".com", ".io"];

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

const generateAndInsertANewDomainInDomainsList = domIdInput => {
  let newDomain = "";

  domIdInput.value !== "" ? (newDomain = domIdInput.value) : newDomain;

  return newDomain;
};

const formGenerateDomains = newDomain => {
  noun.push(newDomain);

  let arr = generateDomains(pronoun, adj, noun, extensions);

  return arr.map(str => {
    //**** */ ---------------- MATTIA -----------------------------
    //   console.log(str.split(".")[0].substr(-3));

    //   if (extensions.includes("." + str.split(".")[0].substr(-3))) {
    //     str = str.split(".")[0].substr(-3);
    //   }
    //   return `<li><i class="far fa-check-circle mr-3"></i>${str.replace(
    //     "es.",
    //     ".es"
    //   )}</li>`;

    // Search proporciona el lugar donde se encuentra el elemento buscado en NÚMERO
    const IndxExtension = str.search("es.");
    let newStr;
    //Si encontró el elemento, por eso debe de ser distinto a -1
    if (IndxExtension !== -1) {
      //cortamos el str desde su inicio hasta la posición del elemento
      newStr = str.slice(0, IndxExtension);
      // y se le añade la terminación que quiero
      newStr += ".es";
    } else {
      newStr = str;
    }

    return `<li><i class="far fa-check-circle mr-3"></i>${newStr}</li>`;
  });
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
  let inputDom = document.querySelector("input");

  document.querySelector("#btnNewDomain").addEventListener("click", () => {
    generateAndInsertANewDomainInDomainsList(inputDom);
  });

  document.querySelector("#btnShowHideDomain").addEventListener("click", () => {
    document.querySelector("#listContainer").style.marginTop = "2rem";

    document.querySelector(
      "#domain"
    ).innerHTML = `<div class = "row p-2">${splitDomainsList(
      formGenerateDomains(generateAndInsertANewDomainInDomainsList(inputDom))
    )}</div>`;

    let regards = document.querySelector("#regards");
    let initText = document.querySelector("#domain");

    hideShowRegards(regards, initText);
  });
};
