import React, { useContext } from "react"
import Section from "./Section"
import SectionsContext from "../context"
const Sections = () => {
  const { sections } = useContext(SectionsContext)
  return (
    <div>
      <h1>Sections</h1>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  )
}
export { Sections as default }
