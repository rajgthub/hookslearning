import React, { useState, useContext } from "react"
import SectionContext from "../context"
const AddSectionForm = () => {
  const { dispatch } = useContext(SectionContext)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const addSection = e => {
    e.preventDefault()
    dispatch({ type: "ADD_SECTION", section: { title, content } })
    setTitle("")
    setContent("")
  }
  return (
    <div>
      <h2>Add a section</h2>
      <form onSubmit={addSection}>
        <input
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          value={content}
          onChange={e => {
            setContent(e.target.value)
          }}
        />
        <button>add</button>
      </form>
    </div>
  )
}
export default AddSectionForm
