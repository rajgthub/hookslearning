import React, { useState, useEffect } from "react"
const Section = ({ section, removeSection }) => {
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
          removeSection(section.title)
        }}
      >
        remove
      </button>
    </div>
  )
}

const SectionApp = () => {
  const [sections, setSections] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  useEffect(() => {
    const localSections = localStorage.getItem("sections")
    localSections && setSections(JSON.parse(localSections))
  }, []) //runs once, like didMount
  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections))
  }, [sections]) //runs whenever sections changes; like didUpdate
  const addSection = e => {
    e.preventDefault()
    setSections([...sections, { title, content }])
    setTitle("")
    setContent("")
  }
  const removeSection = title => {
    setSections(sections.filter(section => section.title !== title))
  }
  return (
    <div>
      <h1>Sections</h1>
      {sections.map((section, index) => (
        <Section key={index} section={section} removeSection={removeSection} />
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
