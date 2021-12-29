import HomePage from "./pages";
import NavBar from "./Components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowBlogDetails from "./pages/ShowBlogDetails";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route
              exact
              path="/ShowBlogDetails/:id"
              element={<ShowBlogDetails />}
            />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
