console.info("Mint Make Better");

const AUTO = "Auto & Transport";
const BILLS = "Bills & Utilities";
const BUSINESS = "Business Services";
const EDUCATION = "Education";

const oldCategories = [AUTO, BILLS, BUSINESS, EDUCATION];
const newCategoryMap = {
  [AUTO]: "Fixed",
  [BILLS]: "Variable Bills",
  [BUSINESS]: "Life Costs",
  [EDUCATION]: "Discretionary"
};

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    for (const node of mutation.addedNodes) {
      if (oldCategories.some(c => node.textContent.includes(c)))
        changeNode(node);
    }
  }
});

function changeNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    for (const category of oldCategories) {
      node.textContent = node.textContent.replace(
        category,
        newCategoryMap[category]
      );
    }
  } else {
    for (const child of node.childNodes) changeNode(child);
  }
}

observer.observe(document.body, { childList: true, subtree: true });
