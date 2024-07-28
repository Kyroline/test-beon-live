import { Outlet } from "react-router-dom"
import MainNavbar from "../components/MainNavbar"
import Footer from "../components/Footer"
import useModal from "../hooks/useModal"

const MainLayout = () => {
    const { showModal, hideModal, modal } = useModal()
    return (
        <>
            <MainNavbar />
            <Outlet />
            <Footer />
            <div className={`${modal ? 'visible before:opacity-20' : 'opacity-0 invisible pointer-events-none'} flex justify-center items-center transition-all z-50 fixed inset-0 h-screen w-screen`}>
                <div className={`absolute transition-all inset-0 bg-black ${modal ? 'opacity-20' : 'opacity-0'}`}></div>
                <div className={`${modal ? 'translate-y-0' : '-translate-y-12'} transition-all absolute flex justify-center items-center`}>
                    {modal}
                </div>
            </div>
        </>
    )
}

export default MainLayout