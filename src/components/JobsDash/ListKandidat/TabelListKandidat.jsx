import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

function ListKandidat() {
  const [kandidat, setKandidat] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getKandidat();
  }, [id]);

  const getKandidat = async () => {
    const response = await axios.get(
      `http://localhost:5000/kandidat/job/${id}`
    );
    console.log(response);
    setKandidat(response.data);
  };

  //   const deleteVideo = async (videoId) => {
  //     await axios.delete(`http://localhost:5000/video/${videoId}`);
  //     getVideo();
  //   };
  return (
    <div className=" container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Domisili</th>
            <th scope="col">Email</th>
            <th scope="col">Telp</th>
            <th scope="col">Github</th>
            <th scope="col">CV</th>
          </tr>
        </thead>
        <tbody>
          {kandidat.map((kandidat, index) => (
            <tr key={kandidat.uuid}>
              <th scope="row">{index + 1}</th>
              <td>{kandidat.name}</td>
              <td>{kandidat.domisili}</td>
              <td>{kandidat.email}</td>
              <td>{kandidat.telp}</td>
              <td>
                {/* <NavLink to={kandidat.github}></NavLink> */}
                <a href={kandidat.github}>{kandidat.github}</a>
              </td>
              <td>
                <a href={kandidat.url}>
                  <FaFilePdf />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListKandidat;
