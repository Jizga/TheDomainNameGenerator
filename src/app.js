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
  let regards = document.getElementById("regards");
  let listContainer = document.getElementById("listContainer");

  if (regards.style.visibility == "visible") {
    regards.style.visibility = "hidden";
    listContainer.style.marginTop = "-22rem";
  } else {
    regards.style.visibility = "visible";
    listContainer.style.marginTop = "0";
    document.getElementById("domain").innerHTML = `<p>
                You need to click on the button to show the domains list
                </p>`;
  }
};

window.onload = () => {
  document.getElementById("btnNewDomain").addEventListener("click", () => {
    document.getElementById("domain").innerHTML = `<ul>${generateDomains(
      pronoun,
      adj,
      noun,
      extensions
    )}</ul>`;

    hideShowRegards();
  });
};
