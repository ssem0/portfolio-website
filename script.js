// Grab elements
const exploreButton = document.getElementById('exploreButton');
const menuOverlay = document.getElementById('menuOverlay');
const closeButton = document.getElementById('closeButton');

// show the menu
exploreButton.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.add('active');
});

// close the menu with X
closeButton.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});

// close menu when a link is clicked
document.querySelectorAll('.menu-overlay nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});

function switchTab(event, tabId) {
  // hide all tab content panes
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active-content');
  });

  // remove the active state from all tab buttons
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // show the current targeted tab content pane
  document.getElementById(tabId).classList.add('active-content');

  // highlight the clicked button as active
  event.currentTarget.classList.add('active');
}
