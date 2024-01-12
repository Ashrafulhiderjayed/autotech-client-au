import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
        </div>
    );
};

export default MyAppointments;