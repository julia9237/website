let tabIndex = 0

export function tabnext(tabs: HTMLCollectionOf<Element>) {
  tabIndex++

  if (tabIndex >= tabs.length) tabIndex = 0

  document.getElementById("selected")!.setAttribute("id", "")
  tabs[tabIndex].setAttribute("id", "selected")
}

export function tabprev(tabs: HTMLCollectionOf<Element>) {
  tabIndex--

  if (tabIndex === -1) tabIndex = tabs.length - 1

  document.getElementById("selected")!.setAttribute("id", "")
  tabs[tabIndex].setAttribute("id", "selected")
}
