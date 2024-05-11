import { useState } from 'react';

function SearchBar({ onSearch, onAddNote, totalCount, resultCount }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      onAddNote(title, description);
      setTitle('');
      setDescription('');
    }
  };

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <label htmlFor='search'>Search Notes: </label>
        <input id='search' type="text" onChange={handleSearch} />
        <p>Total Notes: {totalCount}</p>
        <p>Showings: {resultCount}</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30vw'}}>
        <label htmlFor='title'>Note Title: </label>
        <input id='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{margin: '10px'}}/>
        <label htmlFor='description'>Note Disc: </label>
        <textarea id='description' rows={4} cols={32} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{margin: '10px'}} />
        <button onClick={handleSubmit} style={{margin: '10px'}}>Add Note</button>
      </div>
    </div>
  );
}

export default SearchBar;