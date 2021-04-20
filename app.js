const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  const tabID = event.currentTarget.id;
  // hide all tab panels
  tabPanels.forEach((Panel) => {
    Panel.hidden = true;
  });

  // mark all tabs as unselected
  tabButtons.forEach((tab) => tab.setAttribute('aria-selected', 'false'));

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', 'true');

  // find the associated tabpanel and show it
  const tabToShow = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === tabID
  );

  tabToShow.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
