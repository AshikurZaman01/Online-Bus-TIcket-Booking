import Card from "./Card";

const Services = () => {

    const services = [
        { id: 1, icon: "RiSecurePaymentLine", title: "Secure Payment", desc: "We provide secure payment gateway for our customers to make payments easily and safely." },
        { id: 2, icon: "RiCustomerService2Line", title: "Customer Support", desc: "We provide 24/7 customer support to our customers to resolve their queries and issues." },
        { id: 3, icon: "RiTruckLine", title: "Fast Delivery", desc: "We provide fast delivery of our products to our customers within the shortest possible time." },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Our <span className="text-primary1">Services</span>
            </h1>
            <div className="w-full grid grid-cols-3 gap-10">
                {services.map((service) => (
                    <Card key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
