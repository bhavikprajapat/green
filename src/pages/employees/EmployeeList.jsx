import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import Attendance from './Attendance';

const EmployeeList = () => {
  const [search, setSearch] = useState("");
  const teams = [
    {
      id: 1,
      name: "વિજય શાહ",
      role: "ટ્રી ગાર્ડિયન",
      Attendance: "હાજર",
      intime: "૦૮:૧૫ AM",
      lastwork: "પ્લાન્ટેશન સાઇટ A",
    },
    {
      id: 2,
      name: "સ્નેહા વ્યાસ",
      role: "સુપરવાઈઝર",
      Attendance: "હાજર",
      intime: "૦૭:૪૫ AM",
      lastwork: "ટીમ રિવ્યુ",
    },
    {
      id: 3,
      name: "કિશન પટેલ",
      role: "નર્સરી ઇનચાર્જ",
      Attendance: "રજા પર",
      intime: "૦૮:૧૫ AM",
      lastwork: "	બીમાર રજા",
    },
  ];
  const filtered = teams.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ><div className="performance-card mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h5>

          હાજરી વિગતો

        </h5>

        <div>

          ☰ ⋮

        </div>

      </div>

      <table className="table">

        <thead>

          <tr>
            <th>Id</th>

            <th>નામ</th>

            <th>ભૂમિકા</th>

            <th>સ્થિતિ</th>

            <th>આવવાનો સમય</th>

            <th>છેલ્લી પ્રવૃત્તિ</th>

          </tr>

        </thead>

        <tbody>

          {filtered.map((item) => (

            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.role}</td>

              <td>

                <span className="badge bg-success">

                  {item.Attendance}

                </span>

              </td>

              <td>{item.intime}</td>
              <td>{item.lastwork}</td>

              <td>

                <FaEye className="text-success" />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
    </div>
  )
}

export default EmployeeList