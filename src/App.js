import './App.css';
import Header from './Components/Header';
import Blance from './Components/Blance';
import Income from './Components/Income';
import History from './Components/History';
import Addnew from './Components/Addnew';




const App = () => {
    return (
        <div>
            <Header/>
            <Blance/>
            <Income/>
            <History/>
            <Addnew/>
        </div>
    )
}

export default App
