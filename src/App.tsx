import './App.css'
import Title from './title.tsx'
import Intro from './intro.tsx'
import {Hobby1} from './hobby1.tsx'
import HobbyTwo from "./hobbyTwo.tsx"


function App() {
    return (
        <div className="App">
            <Title />
            <Intro nameOne="Felicia Moua" nameTwo="Alex Lowczyk"/>
            <Hobby1 />
            <HobbyTwo></HobbyTwo>
        </div>
    )
}


export default App
