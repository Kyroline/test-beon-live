import { BsXLg } from "react-icons/bs"
import Input from "../components/forms/Input"
import { FaGoogle } from "react-icons/fa"
import useModal from "../hooks/useModal"
import RegisterModal from "./RegisterModal"

const DetailModal = ({ detail }) => {
    const { showModal, hideModal, modal } = useModal()
    return (
        <div className="flex flex-col bg-white p-2 rounded-xl z-50 w-full relative py-4">
            <h1 className='text-xl font-bold mt-4 mb-2'>Apa yang akan Anda Dapatkan</h1>

            <div dangerouslySetInnerHTML={{ __html: detail }} className="h-96 overflow-y-auto"></div>

            <button onClick={() => hideModal()} className="border p-2 bg-[#182c4e] text-white mt-4 w-full rounded-md"><span className="font-bold">Kembali</span></button>
        </div>
    )
}

export default DetailModal