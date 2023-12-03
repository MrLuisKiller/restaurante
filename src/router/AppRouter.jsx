import { Routes, Route, Navigate } from "react-router-dom"

const SN = () => <h1>Sobre Mosotros</h1>
const Menu = () => <h1>Menu</h1>
const Reservar = () => <h1>Reservar</h1>
const Reservas = () => <h1>Reservas</h1>
const NotFound = () => <h1>404: Not Found</h1>

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<SN />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservar" element={<Reservar />} />
            <Route path="reservar/:id" element={<Reservar />} />
            <Route path="reservas" element={<Reservas />} />
            <Route path="404" element={<NotFound />} />

            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

export default AppRouter