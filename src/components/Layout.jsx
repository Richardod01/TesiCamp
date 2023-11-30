import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-green-500 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">WeatherWatch MX-TESI</h2>
                <nav className="mt-10">
                    <Link
                        className={`${location.pathname === '/' ? 'text-green-300' : 'text-white'} text-2xl block mt-2 hover:text-green-300 `}
                        to='/'>Prevencion</Link>
                    <Link
                        className={`${location.pathname === '/emergencia' ? 'text-green-300' : 'text-white'} text-2xl block mt-2 hover:text-green-300 `}
                        to='/emergencia'>Emergencias</Link>
                    <Link
                        className={`${location.pathname === '/difusion' ? 'text-green-300' : 'text-white'} text-2xl block mt-2 hover:text-green-300 `}
                        to='/difusion'>Difusion</Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
