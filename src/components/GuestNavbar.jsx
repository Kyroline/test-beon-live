import { useState } from "react"
import useModal from "../hooks/useModal"
import LoginModal from "../modals/LoginModal"

const GuestNavbar = () => {
    const { showModal, hideModal, modal } = useModal()

    return (
        <nav className="fixed z-30 inset-0 h-16 items-center font-[Poppins] font-medium flex flex-row w-screen bg-[#182c4e] text-white justify-between sm:px-20 px-0">
            <div className="w-32 ml-8 h-full flex justify-center items-center">
                <img className='w-full' src="/logo.png" alt="" />
            </div>
            <div className="flex flex-row justify-center items-center">
                <button onClick={() => showModal(<LoginModal />)} className="border rounded-xl px-4 p-2">Login</button>
            </div>
        </nav>
    )
}

export default GuestNavbar