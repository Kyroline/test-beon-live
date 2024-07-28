const Input = ({ type, value, onChange, className, placeholder }) => {
    return (
        <input className={className + " p-2 outline-none border w-full rounded-md"} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export default Input