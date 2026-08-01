
import { Pagination } from 'antd';
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';


const DonationReport = () => {
    const [search, setSearch] = useState("");
    const [currentpage, setcurrentpage] = useState(1)
    const [itemperpage, setitemperpage] = useState(3)


    const lastpage = itemperpage * currentpage
    const firstpage = lastpage - itemperpage



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
        {
            id: 4,
            name: "કિશન પટેલ",
            role: "નર્સરી ઇનચાર્જ",
            Attendance: "રજા પર",
            intime: "૦૮:૧૫ AM",
            lastwork: "	બીમાર રજા",
        },
        {
            id: 5,
            name: "કિશન પટેલ",
            role: "નર્સરી ઇનચાર્જ",
            Attendance: "રજા પર",
            intime: "૦૮:૧૫ AM",
            lastwork: "	બીમાર રજા",
        },
        {
            id: 6,
            name: "કિશન પટેલ",
            role: "નર્સરી ઇનચાર્જ",
            Attendance: "રજા પર",
            intime: "૦૮:૧૫ AM",
            lastwork: "	બીમાર રજા",
        },
    ];

    const currentindex = teams.slice(firstpage, lastpage)

    const handelonChange = (item, index) => {
        setcurrentpage(item)
        setitemperpage(index)
    }
    const filtered = teams.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.role.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container-fluid mt-4">
  <div className="card shadow-sm border-0 p-3">

    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="m-0">દાન ઇતિહાસ</h5>

      <div>☰ ⋮</div>
    </div>

    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">

        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>નામ</th>
            <th>ભૂમિકા</th>
            <th>સ્થિતિ</th>
            <th>આવવાનો સમય</th>
            <th>છેલ્લી પ્રવૃત્તિ</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentindex.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
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
                <FaEye
                  className="text-success"
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

    <div className="d-flex justify-content-center mt-4">
      <Pagination
        current={currentpage}
        pageSize={itemperpage}
        total={teams.length}
        onChange={handelonChange}
      />
    </div>

  </div>
</div>
    )
}

export default DonationReport