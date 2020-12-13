import { Card, Tag } from 'antd';

function Note({ title, text, tags }) {
	return (
		<div className="Note">
			<Card title={title}>
				<p>
					{text}
				</p>
				<p>
					{tags.map((tag, index) => <Tag key={index} color="blue">tag</Tag>)}
				</p>
			</Card>
		</div>
	);
}

export default Note;
