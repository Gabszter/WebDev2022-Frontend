import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function () {
    const [movies,setMovies] = useState([]);

    const {id}=useParams();

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies= async()=>{
        const result=await axios.get("http://localhost:8080/movies");
        setMovies(result.data);
    };

    const deleteMovie=async (id) => {
        await axios.delete(`http://localhost:8080/movie/${id}`);
        loadMovies();
    };

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadownpm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Watched / Planned</th>
                        <th scope="col">Score</th>
                        <th scope="col">Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {

                        movies.map((movie,index)=>(
                            <tr>
                            <th scope='row' key={index}>{index+1}</th>
                            <td>{movie.name}</td>
                            <td>{movie.watched}</td>
                            <td>{movie.score}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewmovie/${movie.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editmovie/${movie.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteMovie(movie.id)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}
