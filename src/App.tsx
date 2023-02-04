import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import { Container } from "@mui/system";
import MenuNavBar from "./components/menu-nav-bar/menu-nav-bar";
import InfoBlob from "./components/info-blob/infoBlob";
import TravelPlan from "./components/travel-plan/travel-plan";
function App() {
    return (
        <div className="App">
            <MenuNavBar />
            <br />
            <br />
            <Container>
                <InfoBlob />
                <br />
                <SearchBar></SearchBar>
            </Container>
            <TravelPlan></TravelPlan>
            <br />
        </div>
    );
}

export default App;
