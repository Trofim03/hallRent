import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppLayout } from "./components"
import { Profile } from "./Pages"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}