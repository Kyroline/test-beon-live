import { useContext } from "react"
import { ModalContext } from "../contexts/ModalContext"

const useModal = () => {
    return useContext(ModalContext) // { showModal, hideModal }
}

export default useModal