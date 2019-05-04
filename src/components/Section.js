import React, { useContext } from "react"
import SectionContext from "../context"
const Section = ({ section }) => {
  const { dispatch } = useContext(SectionContext)
  return (
    <div>
      <h4>{section.title}</h4>
      <p>{section.content}</p>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_SECTION", title: section.title })
        }}
      >
        remove
      </button>
    </div>
  )
}
export { Section as default }
