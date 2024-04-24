import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

 const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/search?q=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
 };

 return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
 );
}


export default App
