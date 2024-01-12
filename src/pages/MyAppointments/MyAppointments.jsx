import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyApplicationTrow from "./MyApplicationTrow";

const MyAppointments = () => {
    const {user} = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);

    const url = `http://localhost:5000/appointments?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl">{appointments.length}</h1>
            <div className="overflow-x-auto">
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
                    appointments.map(appointment => <MyApplicationTrow
                        key={appointment._id}
                        appointmentDetails={appointment}
                    ></MyApplicationTrow>)
                }
                </tbody>
                
            </table>
            </div>
        </div>
    );
};

export default MyAppointments;