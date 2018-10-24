import { HIDE_CATEGORY } from './constants'

function findCategoryText(str) {
  str = str.toLowerCase()
  if ('uncategorized'.startsWith(str)) return 'Uncategorized'
  if ('hide'.startsWith(str)) return HIDE_CATEGORY
  for (const node of document.querySelectorAll('#menu-category ul ul li')) {
    if (node.textContent.toLowerCase().startsWith(str)) return node.textContent
  }
}

function clickEl(elOrId) {
  if (typeof elOrId === 'string') elOrId = document.getElementById(elOrId)
  elOrId.dispatchEvent(new Event('click'))
}

document.addEventListener('keypress', e => {
  if (!e.ctrlKey) return
  switch (e.key) {
    case 'c':
      const input = document.getElementById('txnEdit-category_input')
      let inputVal = '_'
      input.value = inputVal
      const valCaptureListener = e => {
        // Strange that we need to cache the value here. For some reason, `input.value` will be the
        // original value when we try passing it to `findCategoryText`.
        inputVal = input.value
      }

      const categoryListener = e => {
        if (e.key !== 'Enter') return
        input.value = findCategoryText(inputVal)
        input.removeEventListener('keydown', categoryListener)
        input.removeEventListener('keyup', categoryListener)
      }

      input.addEventListener('keydown', categoryListener, true) // Must use capture phase to change value before default Enter key functionality
      input.addEventListener('keyup', valCaptureListener)
      clickEl('txnEdit-category_picker')
      break

    case 'n':
      document.getElementById('txnEdit-merchant_input').focus()
      break

    case 's': {
      const { scrollY } = window
      document.addEventListener('scroll', () => window.scrollTo(0, scrollY), {
        once: true,
      })
      document.getElementById('txnEdit-createRule').checked = true
      clickEl('txnEdit-submit')
      break
    }
  }
})
