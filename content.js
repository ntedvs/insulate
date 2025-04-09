chrome.runtime.onMessage.addListener((msg) => {
  const input = document.activeElement
  input.value = msg
})
