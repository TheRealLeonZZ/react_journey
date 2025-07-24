import { memo } from 'react';

const TodoItem = memo(({ todo, onToggle }) => {
	const handleToggle = () => {
		onToggle(todo.id);
	};

	const itemStyle = {
		marginBottom: '10px',
		padding: '10px',
		backgroundColor: '#f8f9fa',
		borderRadius: '4px',
		border: '1px solid #e9ecef',
		display: 'flex',
		alignItems: 'center',
	};

	const checkboxStyle = {
		marginRight: '10px',
		transform: 'scale(1.2)',
	};

	const textStyle = {
		textDecoration: todo.completed ? 'line-through' : 'none',
		color: todo.completed ? '#666' : '#000',
		fontSize: '16px',
	};

	return (
		<li style={itemStyle}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={handleToggle}
				style={checkboxStyle}
			/>
			<span style={textStyle}>{todo.name}</span>
		</li>
	);
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
