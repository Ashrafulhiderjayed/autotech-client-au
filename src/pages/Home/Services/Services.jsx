import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-32">
            {
                services.map(service =><ServicesCard
                key={service.id}
                service={service}
                ></ServicesCard>)
            }
        </section>
    );
};

export default Services;