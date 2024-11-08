export const hasRefreshPage = async () => {
  chrome.webNavigation.onCommitted.addListener(function (details) {
    if (details.transitionType === "reload") {
      return
    }
  })
}
