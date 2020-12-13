import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';

import Note from './components/Note';

import './App.css';
import AddNote from './components/AddNote';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const addNoteCallback = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <Row gutter={[24, 24]}>
        <Col span={12}>
          {notes.map(
            (note, i) => (
              <Note
                key={i}
                title={note.title}
                text={note.text}
                tags={note.tags}
              />
            )
          )}
        </Col>
        <Col span={12}>
          <AddNote addNoteCallback={addNoteCallback} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
