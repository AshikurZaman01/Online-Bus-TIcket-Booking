import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/HomePages/Navbar/Navbar'

const Root = () => {
    return (
        <div>

            <main className='max-w-screen-xl min-h-screen mx-auto px-4 py-2 font-primary'>
                <Navbar />

                <Outlet />
            </main>

        </div>
    )
}

export default Root