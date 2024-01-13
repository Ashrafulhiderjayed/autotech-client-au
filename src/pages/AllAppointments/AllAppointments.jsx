import { useEffect, useState } from "react";
import AllAppointmentsRow from "./AllAppointmentsRow";



const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <section className="h-screen">
            <h1 className="text-2xl">{appointments.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    appointments.map(appointment => <AllAppointmentsRow
                        key={appointment._id}
                        appointmentDetails={appointment}
                    ></AllAppointmentsRow>)
                }
                </tbody>
                
            </table>
        </section>
    );
};

export default AllAppointments;