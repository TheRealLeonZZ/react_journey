import { useReducer, useState, useMemo, useCallback } from 'react';
import TodoItem from './TodoItem';

function todoReducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: Date.now(),
					name: action.payload,
					completed: false,
				},
			];
		case 'TOGGLE_TODO':
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		default:
			return state;
	}
}

function ReducerTodo() {
	const [todos, dispatch] = useReducer(todoReducer, []);
	const [inputValue, setInputValue] = useState('');

	const handleAddTodo = () => {
		if (inputValue.trim() !== '') {
			dispatch({ type: 'ADD_TODO', payload: inputValue.trim() });
			setInputValue('');
		}
	};

	const handleToggleTodo = useCallback((id) => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
	}, []);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleAddTodo();
		}
	};

	// Memoize the completed count calculation
	const completedCount = useMemo(() => {
		return todos.filter((todo) => todo.completed).length;
	}, [todos]);

	// Memoize the todo list rendering
	const todoList = useMemo(() => {
		if (todos.length === 0) {
			return (
				<p style={{ color: '#666', fontStyle: 'italic' }}>
					No todos yet. Add one above!
				</p>
			);
		}

		return (
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodo} />
				))}
			</ul>
		);
	}, [todos, handleToggleTodo]);

	return (
		<div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
			<h2>Leon's Todo List</h2>

			<div style={{ marginBottom: '20px' }}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyPress={handleKeyPress}
					placeholder="Enter a new todo..."
					style={{
						padding: '8px 12px',
						marginRight: '10px',
						borderRadius: '4px',
						border: '1px solid #ccc',
						width: '300px',
					}}
				/>
				<button
					onClick={handleAddTodo}
					style={{
						padding: '8px 16px',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Add
				</button>
			</div>

			<div>{todoList}</div>

			<div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
				Total: {todos.length} | Completed: {completedCount}
			</div>
		</div>
	);
}

export default ReducerTodo;
