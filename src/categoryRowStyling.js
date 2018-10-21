const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    const { target } = mutation;
    if (
      target instanceof HTMLTableCellElement &&
      target.classList.contains("cat")
    ) {
      if (target.textContent.startsWith("_")) {
        target.parentNode.classList.remove("make-better-row-incomplete");
      } else {
        target.parentNode.classList.add("make-better-row-incomplete");
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
