import { Card, Input, Typography, Button, Select } from 'antd';
import { useState } from 'react';

function AddNote({ addNoteCallback }) {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [tags, setTags] = useState([]);

	const addNote = () => {
		fetch('http://localhost:8000/notes', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				text,
				tags,
			}),
		})
		.then((res) => res.json())
		.then((data) => addNoteCallback(data))
		.then(() => {
			setTitle("");
			setText("");
			setTags([]);
		});
	};

	return (
		<div className="AddNote">
			<Card title="Add a new note">
				<Typography.Text strong>Title</Typography.Text>: <br />
				<Input value={title} onChange={(e) => setTitle(e.target.value)} />

				<br />
				<br />
				<Typography.Text strong>Text (required)</Typography.Text>: <br />
				<Input.TextArea value={text} onChange={(e) => setText(e.target.value)} />

				<br />
				<br />
				<Typography.Text strong>Tags</Typography.Text>: <br />
				<Select value={tags} mode="tags" style={{ width: "100%" }} onChange={(values) => setTags(values)} />

				<br />
				<br />
				<Button type="primary" onClick={addNote}>Send</Button>
			</Card>
		</div>
	);
}

export default AddNote;
