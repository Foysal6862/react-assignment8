import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import background from "../src/images/bg-img2.jpg";
import EngineerDetail from "./components/EngineerDetail/EngineerDetail";

function App() {
        return (
                <div
                        style={{
                                backgroundImage: `url(${background})`,
                                minHeight: "100%",
                        }}
                        className="App"
                >
                <Header></Header>
                <EngineerDetail></EngineerDetail>
                </div>
        );
}

export default App;
