import React, {useState} from "react"
function AppHooks() {
    const [appData, setAppData] = useState({
        count: 0,
        title: "Count app"
    })
    const formHandler = (e) => {
        e.preventDefault()
      }
     const titleHander = (e) => {
        setAppData({...appData,
          title: e.target.value
        })
      }
    return (
        <div className="App">
            <h1>{appData.title}</h1>
             <h2>{appData.count}</h2>
             <button onClick = {
                 () => setAppData({...appData, count: appData.count + 1})
             }>+</button>
         <form onSubmit={formHandler}>
          <input value={appData.title} onChange={titleHander} />
          <button type="submit">
            Submit
          </button>
        </form>
        </div>
    );
}
export default AppHooks;