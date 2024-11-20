import { RiSecurePaymentLine, RiCustomerService2Line, RiTruckLine } from "react-icons/ri";

const Card = ({ service }) => {
    const { icon, title, desc } = service;

    // Map the icon names to the actual icon components
    const icons = {
        RiSecurePaymentLine: RiSecurePaymentLine,
        RiCustomerService2Line: RiCustomerService2Line,
        RiTruckLine: RiTruckLine,
    };

    const Icon = icons[icon]; // Get the corresponding icon component dynamically

    return (
        <div className="mt-20">
            <div className="w-full bg-neutral-200 hover:bg-transparent rounded-xl p-7 flex items-center justify-center gap-4 flex-col text-center cursor-pointer ease-in-out duration-300">
                <div className="w-full flex items-center justify-center gap-x-3">
                    <div className="w-12 h-12 rounded-xl bg-neutral-400/40 flex items-center justify-center">
                        {Icon && <Icon className="w-7 h-7 text-neutral-800 font-bold" />}
                    </div>
                </div>
                <h1 className="text-2xl text-neutral-800 font-bold">{title}</h1>
                <p className="text-sm text-neutral-600 font-normal">{desc}</p>
            </div>
        </div>
    );
};

export default Card;
