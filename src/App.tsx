import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import { Container } from "@mui/system";
import MenuNavBar from "./components/menu-nav-bar/menu-nav-bar";
import InfoBlob from "./components/info-blob/infoBlob";
import TravelPlan from "./components/travel-plan/travel-plan";
import HomeImage from "./components/home-image/home-image";
import ChatGPTBot from "./components/chatbot/chatbox-comp";
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
                <TravelPlan />
                <br />
            </Container>
        </div>
    );
}

export default App;
