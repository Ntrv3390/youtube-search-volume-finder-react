import React, { useState } from 'react'

function Home() {

    const API_KEY = 'AIzaSyDcWE7xPEOWxadYNsUKIUOeTbLZ_rqya9w';
    const [keywords, setKeywords] = useState('');
    const [searchVolume, setSearchVolume] = useState(0);

    const handleKeywordChange = (event) => {
        setKeywords(event.target.value);
    };

    const handleReset = () => {
      setKeywords('');
      setSearchVolume(0);
    }

    const getSearchVolume = async () => {
      try
      {
        setSearchVolume(0);
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(keywords)}&type=video&maxResults=50&key=${API_KEY}`);
        const data = await response.json();
        setSearchVolume(data.pageInfo.totalResults || 0);
      }
      catch(error) {
          console.error('Error fetching data:', error);
      }
    };

  return (
    <div className="container">
        <h1 className="text-center mt-2">Welcome to YouTube Search Volume Finder</h1>

        <h4 className="text-center mt-4">Enter a keyword to get search volume results!</h4>
        <input type="text" name="keyword" value={keywords} onChange={handleKeywordChange} placeholder="Enter a keyword" className="form-control mt-4" required/>
        <div className="d-flex flex-row bd-highlight mb-3">
          <button onClick={getSearchVolume} className="btn btn-primary mt-3">Get Search Volume</button>
          <button onClick={handleReset} className="btn btn-primary mt-3 mx-2">Reset</button>
        </div>
        <p className="text-center mt-3 fs-3">Search volume for <strong>{keywords}</strong>: <strong>{searchVolume}</strong> Results</p>
        <p className="text-center mt-5 fs-5"><strong>Note:</strong> - If no of results exceeds <strong>1000000</strong> then it will only show <strong>1000000 Results</strong><br/>- The api can be slow sometimes, so wait for some time to get the results</p>
    </div>
  )
}

export default Home;