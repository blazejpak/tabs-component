import data from "./data.json" assert { type: "json" };
const boxHTML = document.querySelector(".box");

function createTabsComponent(container, config) {
  const content = document.querySelector(".content");
  let activeTab = 0;

  const addContent = () => {
    container.innerHTML = config
      .map(
        (tab, index) => `
          <li class='tab ${
            index === activeTab ? "active" : ""
          }' data-index="${index}" >${tab.label}</li>
            `
      )
      .join("");

    content.innerHTML = config[activeTab].content;
  };
  addContent();

  const tabs = document.querySelectorAll(".tab");

  const changeTab = (index) => {
    activeTab = index;
    tabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
    });
    content.innerHTML = config[activeTab].content;

    console.log(activeTab);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const index = +e.target.dataset.index;
      console.log(typeof index);
      changeTab(index);
    });
  });
}

createTabsComponent(boxHTML, data);
