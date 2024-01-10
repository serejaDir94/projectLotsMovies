import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import MoviesDetal from "./inContent/MoviesDetal"
import SearchEnd from "./SearchEnd"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={< App />} path="/"/>
            <Route element={< MoviesDetal />} path=":id"/>
            <Route element={< SearchEnd />} path="/search/:resName"/>

            <Route path='*' element='Page not found'/>
        </Routes>
    </BrowserRouter>
}

export default Router