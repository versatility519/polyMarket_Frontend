import { BtnProps } from "../types/buttons";

const Button: React.FC<BtnProps> = ({ icon, text, price,  onClick, className }) => {
    return <button onClick={onClick} className={`${className} `}>
        {icon}
        <p className="text-nowrap">{text} {price} </p>
    </button>
}

export default Button;