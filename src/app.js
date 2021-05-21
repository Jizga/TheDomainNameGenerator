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

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       for (let k = 0; k < arr3.length; k++) {
  //         for (let w = 0; w < arr4.length; w++) {
  //           domainList.push(arr1[i] + arr2[j] + arr3[k] + arr4[w]);
  //         }
  //       }
  //     }
  //   }

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

window.onload = () => {
  document.getElementById("btnNewDomain").addEventListener("click", () => {
    document.getElementById("domain").innerHTML = `<ul>${generateDomains(
      pronoun,
      adj,
      noun,
      extensions
    )}</ul>`;
  });
};
