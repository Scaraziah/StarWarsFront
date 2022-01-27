import React, { useState } from "react";
import {nanoid} from 'nanoid'
import data from "../mock-data.json"


const App = () => {
  const [episodes, setEpisodes] = useState(data);
  const [addFormData, setAddFormData] =useState({
    name: '',
    season: 0,
    episodeNumber: 0,
    location: '',
    comment: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEpisode = {
      id: nanoid(),
      name: addFormData.name,
      season: addFormData.season,
      episodeNumber: addFormData.episodeNumber,
      location: addFormData.location,
      comment: addFormData.comment
    };

    const newEpisodes = [...episodes, newEpisode];
    setEpisodes(newEpisodes)
  };

return <div className="app-container">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Season</th>
        <th>Episode</th>
        <th>Where to find</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map((episode) =>(
        <tr>
        <td>{episode.name}</td>
        <td>{episode.season}</td>
        <td>{episode.episodeNumber}</td>
        <td>{episode.location}</td>
        <td>{episode.comment}</td>
      </tr>
      ))}
      
    </tbody>
  </table>

  <h2>Add New Episodes</h2>
  <form onSubmit={handleAddFormSubmit}>
    <input
      type = "text"
      name="name"
      required="required"
      placeholder="Episode Name"
      onChange={handleAddFormChange}
    />
    <input
      type = "number"
      name="season"
      required="required"
      placeholder="What Season"
      onChange={handleAddFormChange}
    />
    <input
      type = "number"
      name="episodeNumber"
      required="required"
      placeholder="Episode Number"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="location"
      required="required"
      placeholder="Where can you find"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="comment"
      required="required"
      placeholder="Comment"
      onChange={handleAddFormChange}
    />
    <button type="submit">Add Episode</button>
  </form>
</div>
};

export default App;
