import { Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "../pages/Nosotros"
import Menu from "../pages/Menu"
import Reservar from "../pages/Reservar"
import NotFound from "../components/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Nosotros />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/404" element={<NotFound />} />

            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

export default AppRouter