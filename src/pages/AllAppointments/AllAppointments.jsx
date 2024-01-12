import { useEffect, useState } from "react";



const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl">{appointments.length}</h1>
        </div>
    );
};

export default AllAppointments;