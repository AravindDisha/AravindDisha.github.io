if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-projects-section').scrollIntoView({ behavior: "smooth" })
  })
}

const page = document.querySelector('.page');
const toggle = page.querySelector('.toggle-input');
const toggleIcon = page.querySelector('.toggle-icon');

const feature1Img = page.querySelector('.feature1');
const feature2Img = page.querySelector('.feature2');
const feature3Img = page.querySelector('.feature3');

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem('checked'));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  replaceClass();
  // replace icons on page
  toggleIconTheme();
  // set the value of the "checked" key in localStorage
  updateLocalStorage();
}

function replaceClass() {
  if (toggle.checked) {
    page.classList.replace('light', 'dark');
  } else {
    page.classList.replace('dark', 'light');
  }
}

function toggleIconTheme() {
  // Replace icons not able to be targeted by css variables
  const filename = window.location.href.split('/').pop();
  if (page.classList.contains('light')) {
    toggleIcon.src = './assets/icons/moon.svg';
    toggleIcon.alt = 'Switch to Dark Mode';
    if (filename.indexOf("index") > -1) {
      feature1Img.src = './assets/images/CustomInfoDark.jpeg';
      feature2Img.src = './assets/images/DOBDark.png';
      feature3Img.src = './assets/images/CAAGraph2.png';
    }
  } else {
    toggleIcon.src = './assets/icons/sun.svg';
    toggleIcon.alt = 'Switch to Light Mode';
    if (filename.indexOf("index") > -1) {
      feature1Img.src = './assets/images/CustomInfoLight.jpeg';
      feature2Img.src = './assets/images/DOBLight.png';
      feature3Img.src = './assets/images/CAAGraph.png';
    }
  }
}

function updateLocalStorage() {
  localStorage.setItem('checked', toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === 'true';
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener('change', toggleTheme);

function expandText(elem) {
  // Expand or hide text with details
  if (elem.innerHTML === "Read more") {
    elem.previousSibling.classList.add("unhide");
    elem.previousSibling.style.display = "block";
    elem.innerHTML = "Read less";
  } else {
    elem.previousSibling.classList.remove("unhide");
    elem.previousSibling.style.display = "none";
    elem.innerHTML = "Read more";
  }
}