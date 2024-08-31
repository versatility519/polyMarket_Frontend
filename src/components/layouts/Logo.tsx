
import logo from "../../assets/logo.png"
interface ColorProps {
    color?: string
}

const Logo: React.FC<ColorProps> = ({ color }) => {

    return (
        <div className="flex w-full items-center gap-1" >
            <img src={logo} className="md:w-16 md:h-16 w-12 h-12 " alt="logo" />
            <p className={`w-full font-bold md:text-3xl text-lg ${color}`}>Oráculo</p>
        </div>
    )
}
export default Logo;
