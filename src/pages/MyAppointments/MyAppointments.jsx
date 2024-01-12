import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyAppointments = () => {
    const {user} = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);

    const url = `http://localhost:5000/appointments?email=${user.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyAppointments;