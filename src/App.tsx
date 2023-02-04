import "./App.css";
import MenuNavBar from "./components/menu-nav-bar/menu-nav-bar";
import InfoBlob from "./components/info-blob/infoBlob";
function App() {
    return (
        <div className="App">
            <MenuNavBar />
            <div>
                <InfoBlob />
            </div>
        </div>
    );
}

export default App;
