/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

const generateDomains = (arr1, arr2, arr3, arr4) => {
  let domain = "";
  let pronDomain = "";
  let adjDomain = "";
  let nounDomain = "";
  let exteDomain = "";

  for (let i = 0; i < arr1.length; i++) {
    pronDomain = arr1[i];
    console.log(pronDomain);

    for (let j = 0; j < arr2.length; j++) {
      adjDomain = arr2[j];
      console.log(adjDomain);

      for (let j = 0; j < arr3.length; j++) {
        nounDomain = arr3[j];
        console.log(nounDomain);

        for (let j = 0; j < arr4.length; j++) {
          exteDomain = arr4[j];
          console.log(exteDomain);
        }
      }
    }
  }

  return (domain = pronDomain + adjDomain + nounDomain + exteDomain);
};

window.onload = () => {
  document.getElementById("btnNewDomain").addEventListener("click", () => {
    document.getElementById("domain").innerHTML = generateDomains(
      pronoun,
      adj,
      noun,
      extensions
    );
  });
};
