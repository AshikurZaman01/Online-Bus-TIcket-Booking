import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>

            <main className='max-w-screen-xl min-h-screen mx-auto px-4 py-2'>
                <Outlet />
            </main>

        </div>
    )
}

export default Root