import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    useEffect( () => {
        document.title = "Code Editor"
    }, [] )

    return (
        <div className="App">
            <h1>EMERALD EDITOR</h1>
            <Link to='/new/py' className="btn btn-lg btn-primary mt-2">Python</Link>
            <Link to='/new/java' className="btn btn-lg btn-primary mt-2">Java</Link>
            <Link to='/new/c' className="btn btn-lg btn-primary mt-2">C Language</Link>
            <Link to='/new/cpp' className="btn btn-lg btn-primary mt-2">C++</Link>
            <Link to='/new/c-sharp' className="btn btn-lg btn-primary mt-2">C#</Link>
            <Link to='/new/go' className="btn btn-lg btn-primary mt-2">Go Lang</Link>
        </div>
    )

}

export default Home