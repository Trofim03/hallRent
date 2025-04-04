import { HashRouter, Route, Routes } from "react-router-dom"
import { AppLayout } from "./components"
import { Profile, UserHalls } from "./Pages"

export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<Profile />} />
                    <Route path="/user_halls" element={<UserHalls />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}