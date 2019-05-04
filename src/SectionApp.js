import React, { useEffect, useReducer } from "react"
import sectionsReducer from "./reducers"
import { AddSectionForm, Sections } from "./components"
import SectionsContext from "./context"
const SectionApp = () => {
  const [sections, dispatch] = useReducer(sectionsReducer, [])
  useEffect(() => {
    const sections = JSON.parse(localStorage.getItem("sections"))
    if (sections) {
      dispatch({ type: "POPULATE_SECTIONS", sections })
    }
  }, []) //runs once, like didMount
  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections))
  }, [sections]) //runs whenever sections changes; like didUpdat

  return (
    <SectionsContext.Provider value={{ sections, dispatch }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column"
        }}
      >
        <Sections />
        <AddSectionForm />
      </div>
    </SectionsContext.Provider>
  )
}

export { SectionApp as default }
