const inputBox = document.querySelector(".input-box");
const nameBox = document.querySelector(".input-box-name");
const saveBtn = document.querySelector(".save-btn");
const linksDiv = document.querySelector(".links-div");
const Page = document.querySelector(".page");
const Error = document.querySelector(".error-text");

saveBtn.addEventListener("click", () => {
  let inputValue = inputBox.value;

  let check = inputValue === "";
  let commaCheck = inputValue.includes(",");
  let nameCheck = nameBox.value;
  if (check || commaCheck || nameCheck === "") {
    Error.textContent = "Enter a valid URL and Link name or save current page!";
  } else {
    httpCheck = inputBox.value.includes("https://");
    if (httpCheck) {
      let rem = inputBox.value.slice(8);
      let linkDiv = document.createElement("div");
      linkDiv.classList.add("linker");
      let link = document.createElement("a");
      link.textContent = rem;
      link.href = `https://${rem}`;
      link.target = "blank";

      Error.textContent = "";

      let delBtn = document.createElement("p");
      delBtn.textContent = "Delete";
      delBtn.classList.add("del-btn");

      linksDiv.appendChild(linkDiv).appendChild(link);
      linkDiv.appendChild(delBtn);
      inputBox.value = "";
      upDateStorage();
    } else {
      let inputValue = inputBox.value;
      let linkDiv = document.createElement("div");
      linkDiv.classList.add("linker");
      let link = document.createElement("a");
      link.textContent = nameBox.value;
      link.href = `https://${inputValue}`;
      link.target = "blank";

      Error.textContent = "";

      let delBtn = document.createElement("p");
      delBtn.textContent = "Delete";
      delBtn.classList.add("del-btn");

      linksDiv.appendChild(linkDiv).appendChild(link);
      linkDiv.appendChild(delBtn);
      inputBox.value = "";
      nameBox.value = "";
      upDateStorage();
    }
  }
});

linksDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.parentElement.remove();
    upDateStorage();
  }
});

const upDateStorage = () => {
  localStorage.setItem("Links", linksDiv.innerHTML);
};

const showLinks = () => {
  linksDiv.innerHTML = localStorage.getItem("Links");
};

showLinks();
