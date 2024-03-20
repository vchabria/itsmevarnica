'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  if (!elem.classList.contains("active")) {
    elem.classList.add("active");
  } else {
    elem.classList.remove("active");
  }
};

// Sidebar variables and toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if(sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Corrected data attribute
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if(select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// Add event to all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.textContent.toLowerCase();
    if(selectValue) selectValue.textContent = this.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all" || selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Add event to all filter button items for large screen
if(filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.textContent.toLowerCase();
      if(selectValue) selectValue.textContent = this.textContent;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// Contact form functionality
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "disabled");
    }
  });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

console.log(navigationLinks)

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    let selectedNavLink = this.textContent.trim().toLowerCase();
    
    for (let j = 0; j < pages.length; j++) {
      let page = pages[j];
      let pageName = page.dataset.page.trim().toLowerCase();
      
      if (selectedNavLink === pageName) {
        page.classList.add("active");
        navigationLinks[j].classList.add("active");
      } else {
        page.classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
    window.scrollTo(0, 0);
  });
}
