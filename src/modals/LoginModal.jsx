import { BsXLg } from "react-icons/bs"
import Input from "../components/forms/Input"
import { FaGoogle } from "react-icons/fa"
import useModal from "../hooks/useModal"
import RegisterModal from "./RegisterModal"

const LoginModal = () => {
    const { showModal, hideModal, modal } = useModal()
    return (
        <div className="flex flex-col bg-white p-2 rounded-xl z-50 w-11/12 md:w-1/2 relative py-4">
            <BsXLg className='absolute right-4 top-4 w-4 h-4 cursor-pointer' onClick={() => hideModal()} />
            <div className="flex flex-col justify-center mt-4 w-full px-4">
                <p className="font-bold text-xl text-center">Login untuk Menonton Video</p>
                <p className="text-center" >Jangan tunda! Dapatkan akses penuh ke semua materi course & webinar sekarang</p>
                <button className="border border-[#182c4e] rounded-md my-1 p-2 flex flex-row items-center justify-center"><FaGoogle className="mr-2" /> <span className="font-bold">Masuk dengan Google</span></button>
            </div>
            <div className="text-center my-2">atau</div>
            <div className="px-4 w-full">
                <Input type={'email'} className={'mb-2'} placeholder={'Email'} />
                <Input type={'password'} placeholder={'Password'} />
                <a className="text-right text-sm underline" href="">Lupa Password?</a>
                <button className="border p-2 bg-[#182c4e] text-white mt-4 w-full rounded-md"><span className="font-bold">Masuk</span></button>
                <span className="text-sm mb-4">Belum punya akun? <a href="#" onClick={() => showModal(<RegisterModal/>)} className="font-bold">Daftar</a></span>
            </div>
        </div>
    )
}

export default LoginModal