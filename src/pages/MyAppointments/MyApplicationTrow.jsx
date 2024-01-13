/* eslint-disable no-undef */


const MyApplicationTrow = ({appointmentDetails, handleDelete}) => {
    const {_id, customerName, vehicle, date, img, time, appointment} = appointmentDetails;

    
    return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-mainColor text-white hover:bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{appointment}</div>
            </div>
          </div>
        </td>
        <td>
            {date}
          <br/>
          <span className="badge badge-ghost badge-sm">{time}</span>
        </td>
        <td>{vehicle}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Confirm</button>
        </th>
      </tr>
    );
};

export default MyApplicationTrow;