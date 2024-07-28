import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

const nav = [
    {
        text: 'Dasbor'
    },
    {
        text: 'Layananku'
    },
    {
        text: 'Learning'
    },
    {
        text: 'Tagihan'
    },
    {
        text: 'Bantuan'
    }

]
const MainNavbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className="fixed z-30 inset-0 h-16 items-center font-[Poppins] font-medium flex flex-row w-screen bg-[#182c4e] text-white justify-between sm:px-20 px-0">
            <div className="w-32 ml-8 h-full flex justify-center items-center">
                <img className='w-full' src="/logo.png" alt="" />
            </div>
            <>
                <div className="hidden flex-row sm:flex">
                    {nav.map((item, index) => (
                        <div className="hover:bg-[#0a1322] transition-colors flex h-full justify-center items-center p-4 hover:cursor-pointer">
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className="hidden sm:flex flex-row justify-center items-center">
                    Haiiii, syahrul :3
                    <img className="ml-2 rounded-full w-8 aspect-square" src="/avatar-def.jpg" alt="" />
                </div>
            </>
            {/* mobile */}
            <div onClick={() => setMenu(prev => !prev)} className="sm:hidden flex flex-col w-16 h-16 items-center justify-center hover:bg-[#0a1322]">
                <CiMenuBurger />
            </div>
            <div className={`sm:hidden w-screen flex flex-col absolute top-16 transition-transform origin-top ${menu ? 'scale-y-100' : '-scale-y-0'} `}>
                {nav.map((item, index) => (
                    <div className="bg-[#182c4e] border-b-[0.25px] hover:bg-[#0a1322] transition-colors flex w-full h-full justify-center items-center p-4 hover:cursor-pointer">
                        {item.text}
                    </div>
                ))}
                <div className="flex flex-row justify-center items-center bg-[#182c4e]">
                    Haiiii, syahrul :3
                    <img className="ml-2 rounded-full w-8 aspect-square" src="/avatar-def.jpg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar