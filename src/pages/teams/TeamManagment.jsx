import React, { useState } from "react";
import "../../Css/TeamManagement.css";

import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import AddTeam from "./AddTeam";

const TeamManagement = () => {

    const [search, setSearch] = useState("");
    const [show,setShow] = useState(false);
    
  const teams = [
  {
    id: 1,
    icon: "🌿",
    team: "સુરત ગ્રીન વોરિયર્સ",
    leader: "રાજેશ પટેલ",
    members: 12,
    work: "તાપી કિનારે સફાઈ",
    trees: 540,
    status: "સક્રિય",
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
    <div className="p-4 w-100">

      <div className="row mt-4">

  {/* LEFT SIDE */}
  <div className="col-lg-8">

    {/* Team Cards */}
    <div className="row g-3">

      {filtered.map((item) => (

        <div className="col-md-6" key={item.id}>

          <div className="team-summary-card">

            <div className="d-flex justify-content-between">

              <div className="location-icon">

                📍

              </div>

              <span className="status-badge">

                {item.status}

              </span>

            </div>

            <h5 className="mt-3 fw-bold">

              {item.team}

            </h5>

            <hr />

            <div className="card-row">

              <span>ટીમ લીડર :</span>

              <strong>{item.leader}</strong>

            </div>

            <div className="card-row">

              <span>કુલ સભ્યો :</span>

              <strong>{item.members}</strong>

            </div>

            <div className="card-row">

              <span>આજનું વૃક્ષારોપણ :</span>

              <strong className="text-success">

                {item.trees}

              </strong>

            </div>

            <div className="card-row">

              <span>માસિક કુલ :</span>

              <strong>

                {item.trees * 10}

              </strong>

            </div>

          </div>

        </div>

      ))}

    </div>

  

    <div className="performance-card mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h5>

          ટીમ પરફોર્મન્સ મેટ્રિક્સ

        </h5>

        <div>

          ☰ ⋮

        </div>

      </div>

      <table className="table">

        <thead>

          <tr>

            <th>ટીમ</th>

            <th>સફળતા</th>

            <th>વૃક્ષો</th>

            <th>સ્ટેટસ</th>

            <th>એક્શન</th>

          </tr>

        </thead>

        <tbody>

          {filtered.map((item) => (

            <tr key={item.id}>

              <td>{item.team}</td>

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

  {/* RIGHT SIDE */}

  <div className="col-lg-4">

    <div className="activity-form">

      <h5 className="mb-4">

        📝 દૈનિક કામગીરી લોગ

      </h5>

      <div className="mb-3">

        <label>

          તારીખ

        </label>

        <input
          type="date"
          className="form-control"
        />

      </div>

      <div className="mb-3">

        <label>

          વિસ્તાર

        </label>

        <select className="form-select">

          <option>

            મોટા વરાછા

          </option>

          <option>

            અડાજણ

          </option>

        </select>

      </div>

      <div className="mb-3">

        <label>

          Google Map Link

        </label>

        <input
          className="form-control"
          placeholder="Link"
        />

      </div>

      <div className="row">

        <div className="col-6">

          <label>

            કામકાજ કલાક

          </label>

          <input
            className="form-control"
            defaultValue="0"
          />

        </div>

        <div className="col-6">

          <label>

            વૃક્ષો

          </label>

          <input
            className="form-control"
            defaultValue="0"
          />

        </div>

      </div>

      <div className="mt-3">

        <label>

          કામનું વર્ણન

        </label>

        <textarea
          rows="4"
          className="form-control"
        />

      </div>

      <div className="mt-3">

        <label>

          ફોટો અપલોડ

        </label>

        <div className="upload-box">

          📷

          <p className="mt-2">

            Click Here To Upload

          </p>

        </div>

      </div>

      <button className="btn btn-success w-100 mt-4">

        લોગ સેવ કરો

      </button>

    </div>

  </div>

</div>

<AddTeam
  show={show}
  setShow={setShow}
/>

               <AddTeam show={show}
    setShow={setShow}
/>     
    </div>
  );
};

export default TeamManagement;