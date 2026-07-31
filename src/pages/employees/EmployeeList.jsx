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
    icon: "💧",
    team: "તાપી રક્ષક દળ",
    leader: "સ્મિતાબેન પટેલ",
    members: 8,
    work: "વૃક્ષારોપણ અભિયાન",
    trees: 1200,
    status: "સક્રિય",
  },
  {
    id: 3,
    icon: "🏔",
    team: "નેચર હેલ્પલાઇન",
    leader: "દિનેશભાઈ શાહ",
    members: 15,
    work: "રોડ સફાઈ",
    trees: 340,
    status: "નિષ્ક્રિય",
  },
  {
    id: 4,
    icon: "🏔",
    team: "નેચર હેલ્પલાઇન",
    leader: "દિનેશભાઈ શાહ",
    members: 15,
    work: "રોડ સફાઈ",
    trees: 340,
    status: "નિષ્ક્રિય",
  },
];
  const filtered = teams.filter(
    (item) =>
      item.team.toLowerCase().includes(search.toLowerCase()) ||
      item.leader.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div><div className="performance-card mt-4">
    
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
    
                  <td width="35%">
    
                    <div className="progress">
    
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${item.members * 5}%` }}
                      />
    
                    </div>
    
                  </td>
    
                  <td>{item.trees}</td>
    
                  <td>
    
                    <span className="badge bg-success">
    
                      {item.status}
    
                    </span>
    
                  </td>
    
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