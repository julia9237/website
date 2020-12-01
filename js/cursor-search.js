//@ts-check

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cursorEntries = [
  {
    name: "default",
    displayName: "Normal Select",
  },
  {
    name: "help",
    displayName: "Help Select",
  },
  {
    name: "pointer",
    displayName: "Pointer",
  },
  {
    name: "text",
    displayName: "Text",
  },
  {
    name: "busy",
    displayName: "Busy",
  },
  {
    name: "progress",
    displayName: "Working in Background",
  },
  {
    name: "move",
    displayName: "Move",
  },
  {
    name: "ns-resize",
    displayName: "Vertical Resize",
  },
  {
    name: "ew-resize",
    displayName: "Horizontal Resize",
  },
  {
    name: "nwse-resize",
    displayName: "Diagonal Resize 1",
  },
  {
    name: "nesw-resize",
    displayName: "Diagonal Resize 2",
  },
  {
    name: "not-allowed",
    displayName: "Unavailable",
  },
  {
    name: "no-drop",
    displayName: "No Drop",
    note: {
      content:
        "This is the same as Unavailable on Windows and Mac due to a bug (Firefox only).",
      href: "https://bugzilla.mozilla.org/show_bug.cgi?id=275174",
    },
  },
  {
    name: "crosshair",
    displayName: "Precision Select",
  },
  {
    name: "zoom-in",
    displayName: "Zoom-in",
  },
  {
    name: "zoom-out",
    displayName: "Zoom-out",
  },
  {
    name: "grab",
    displayName: "Grab",
  },
  {
    name: "grabbing",
    displayName: "Grabbing",
  },
  {
    name: "all-scroll",
    displayName: "All Scroll",
  },
  {
    name: "cell",
    displayName: "Cell",
  },
  {
    name: "col-resize",
    displayName: "Column Resize",
  },
  {
    name: "row-resize",
    displayName: "Row Resize",
  },
  {
    name: "vertical-text",
    displayName: "Vertical Text",
  },
  {
    name: "alias",
    displayName: "Alias",
  },
  {
    name: "copy",
    displayName: "Copy",
  },
  {
    name: "context-menu",
    displayName: "Context Menu",
    note: {
      content: "Missing on Windows.",
      href: "https://bugzilla.mozilla.org/show_bug.cgi?id=258960",
    },
  },
  {
    name: "n-resize",
    displayName: "North Resize",
  },
  {
    name: "e-resize",
    displayName: "East Resize",
  },
  {
    name: "s-resize",
    displayName: "South Resize",
  },
  {
    name: "w-resize",
    displayName: "West Resize",
  },
  {
    name: "ne-resize",
    displayName: "North East Resize",
  },
  {
    name: "nw-resize",
    displayName: "North West Resize",
  },
  {
    name: "se-resize",
    displayName: "South East Resize",
  },
  {
    name: "sw-resize",
    displayName: "South West Resize",
  },
]

function renderCursorItem(cursor) {
  const { name, displayName, note } = cursor

  const container = document.createElement("li")
  container.className = ["cursor", name, note ? "has-note" : ""].join(" ")
  container.style.cursor = name

  const label = document.createElement("span")
  label.innerText = displayName

  container.appendChild(label)

  if (note) {
    const anchor = document.createElement("a")

    anchor.className = "note"
    anchor.href = note.href
    anchor.innerText = note.content

    container.appendChild(anchor)
  }

  return container
}

function renderCursorList(cursors) {
  const container = $(".cursor-list")
  const renderedCursors = cursors.map((c) => renderCursorItem(c))

  container.innerHTML = ""
  container.append(...renderedCursors)
}

function handleFilterQuery(query) {
  const filteredCursors = cursorEntries.filter((c) =>
    c.displayName.toLowerCase().includes(query.toLowerCase())
  )
  renderCursorList(filteredCursors)
}

function main() {
  renderCursorList(cursorEntries)

  const input = document.getElementById("search-input")

  input.addEventListener("input", (e) => {
    // @ts-ignore
    handleFilterQuery(e.target.value)
  })
}

main()
