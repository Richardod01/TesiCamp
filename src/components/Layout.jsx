import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-500 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">WeatherWatch</h2>
                <p className="text-4xl font-black text-center text-white">MX-TESI</p>
                <nav className="mt-10">
                    <Link
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
                        to='/'>Prevencion</Link>
                    <Link
                        className={`${location.pathname === '/emergencia' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}
                        to='/emergencia'>Emergencias</Link>
                    <Link
                        className={`${location.pathname === '/difusion' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}
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
