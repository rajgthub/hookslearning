const sectionsReducer = (sections, action) => {
  switch (action.type) {
    case "POPULATE_SECTIONS":
      return action.sections
    case "ADD_SECTION":
      return [...sections, action.section]
    case "REMOVE_SECTION":
      return sections.filter(section => section.title !== action.title)
    default:
      return sections
  }
}
export { sectionsReducer as default }
