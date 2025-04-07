document
  .querySelector("#paste")
  .addEventListener("click", () => chrome.runtime.sendMessage("Test"))
