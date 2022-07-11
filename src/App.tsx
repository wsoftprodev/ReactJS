import { Route, Routes } from "react-router-dom"
import CreatePostPage from "./components/CreatePostPage/CreatePostPage"
import DetailsPostPage from "./components/DetailsPostPage/DetailsPostPage"
import HomePage from "./components/HomePage/HomePage"
import { ROUTES } from "./routes"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTES.CREATE_PAGE} element={<CreatePostPage />} />
        <Route path={ROUTES.DETAILS_PAGE} element={<DetailsPostPage />} />
      </Routes>
    </div>
  )
}

export default App
