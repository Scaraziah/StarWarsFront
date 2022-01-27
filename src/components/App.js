import React, { useState } from "react";
import data from "../mock-data.json"

const App = () => {
  const [episodes, setEpisodes] = useState(data);

return <div className="app-container">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Season</th>
        <th>Episode</th>
        <th>Where to find</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map((episode) =>(
        <tr>
        <td>{episode.name}</td>
        <td>{episode.season}</td>
        <td>{episode.episodeNumber}</td>
        <td>{episode.location}</td>
        <td>{episode.notes}</td>
      </tr>
      ))}
      
    </tbody>
  </table>
</div>
};

export default App;
