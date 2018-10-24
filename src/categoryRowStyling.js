import { HIDE_CATEGORY } from './constants'

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    const { target } = mutation
    if (
      target instanceof HTMLTableCellElement &&
      target.classList.contains('cat')
    ) {
      const { textContent } = target
      const { classList } = target.parentNode

      if (textContent.startsWith('_')) {
        classList.remove(
          'make-better-row-incomplete',
          'make-better-row-ignored'
        )
      } else {
        classList.add(
          textContent.startsWith('Hide from Budget') || textContent === 'Income'
            ? 'make-better-row-ignored'
            : 'make-better-row-incomplete'
        )
      }
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })
