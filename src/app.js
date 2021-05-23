/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

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

  return domainList
    .map(str => `<li><i class="far fa-check-circle mr-2"></i> ${str}</li>`)
    .join(" ");
};

const hideShowRegards = () => {
  let regards = document.querySelector("#regards");
  let listContainer = document.querySelector("#listContainer");

  console.log(
    'document.querySelector("#regards")',
    document.querySelector("#regards")
  );

  if (regards.style.visibility == "visible") {
    regards.style.visibility = "hidden";
    listContainer.style.marginTop = "-22rem";
  } else {
    regards.style.visibility = "visible";
    listContainer.style.marginTop = "0";
    document.querySelector("#domain").innerHTML =
      "You need to click on the button to show the domains list";
  }
};

window.onload = () => {
  document.querySelector("#btnNewDomain").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = `<ul>${generateDomains(
      pronoun,
      adj,
      noun,
      extensions
    )}</ul>`;

    hideShowRegards();
  });
};
