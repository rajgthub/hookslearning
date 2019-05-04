import React, { useState, useEffect, useReducer } from "react"
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
const Section = ({ section, dispatch }) => {
  useEffect(() => {
    console.log("setting up!")
    return () => {
      console.log("cleaning up!")
    }
  }, []) //or section props
  return (
    <div>
      <h4>{section.title}</h4>
      <p>{section.content}</p>
      <button
        onClick={() => {
          // removeSection(section.title)
          dispatch({ type: "REMOVE_SECTION", title: section.title })
        }}
      >
        remove
      </button>
    </div>
  )
}

const SectionApp = () => {
  const [sections, dispatch] = useReducer(sectionsReducer, [])
  // const [sections, setSections] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  useEffect(() => {
    const sections = JSON.parse(localStorage.getItem("sections"))
    if (sections) {
      dispatch({ type: "POPULATE_SECTIONS", sections })
    }
  }, []) //runs once, like didMount
  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections))
  }, [sections]) //runs whenever sections changes; like didUpdate
  const addSection = e => {
    e.preventDefault()
    // setSections([...sections, { title, content }])
    dispatch({ type: "ADD_SECTION", section: { title, content } })
    setTitle("")
    setContent("")
  }
  const removeSection = title => {
    // setSections(sections.filter(section => section.title !== title))
  }
  return (
    <div>
      <h1>Sections</h1>
      {sections.map((section, index) => (
        <Section key={index} section={section} dispatch={dispatch} />
      ))}
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

export default SectionApp
