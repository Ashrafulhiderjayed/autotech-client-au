

const AllAppointmentsRow = ({appointmentDetails}) => {
    const {customerName, vehicle, date, img, time, appointment} = appointmentDetails;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default AllAppointmentsRow;