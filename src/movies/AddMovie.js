import React, { useState } from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


export default function AddMovie() {
    let navigate = useNavigate();
  
    const [movie, setMovie] = useState({
      name: "",
      watched: "",
      score:"",
    });
  
    const { name, watched, score} = movie;
  
    const onInputChange = (e) => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/movie", movie);
      navigate("/");
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add new movie</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the movie name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Watched" className="form-label">
                  Watched or plan to watch
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Watched / Planned"
                  name="watched"
                  value={watched}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Score" className="form-label">
                  Score
                </label>
                <input
                  type={"number"}
                  min="1"
                  max="10"
                  className="form-control"
                  placeholder="Enter the score"
                  name="score"
                  value={score}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-1" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
  