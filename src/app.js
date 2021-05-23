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
  //Uso clases e id ya que las clases van a variar
  let regards = document.querySelector("#regards");
  //Para poder trabajar con las clases del DOM como si fuera un array
  const classes = [...regards.classList];

  if (classes.includes("show")) {
    regards.classList.remove("show");
    regards.classList.add("hide");
  } else {
    regards.classList.remove("hide");
    regards.classList.add("show");
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
