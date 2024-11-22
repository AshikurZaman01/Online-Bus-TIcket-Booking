import { useState } from "react"
import { FaX } from "react-icons/fa6";

const AlertMsg = ({ msg }) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className="w-full flex justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl" role="alert">

            <span className="text-end w-full">{msg}</span>

            <button
                onClick={handleClose}
                aria-label="Close"
                className="ml-4 text-primary1 hover:text-primary1/90">
                <FaX className="w-3 h-3" />
            </button>

        </div>
    )
}

export default AlertMsg