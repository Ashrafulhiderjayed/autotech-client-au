import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyApplicationTrow from "./MyApplicationTrow";
import Swal from "sweetalert2";

const MyAppointments = () => {
    const {user} = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);

    const url = `http://localhost:5000/appointments?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, []);

    const handleDelete = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result => {
          if(result.isConfirmed){
            fetch(`http://localhost:5000/appointments/${id}`,{
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your Appointment has been deleted.",
                          icon: "success"
                        });
                    const remaining = appointments.filter(appointment => appointment._id !== id);
                    setAppointments(remaining);
              }
            })
          }
        }))
      }
    return (
        <section className="h-screen mx-auto max-w-7xl">
            
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <h1 className="text-3xl">{appointments.length}</h1>
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Data</th>
                    <th>Model Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    appointments.map(appointment => <MyApplicationTrow
                        key={appointment._id}
                        appointmentDetails={appointment}
                        handleDelete={handleDelete}
                    ></MyApplicationTrow>)
                }
                </tbody>
                
            </table>
            </div>
        </section>
    );
};

export default MyAppointments;