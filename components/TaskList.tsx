interface TaskListProps {
    title: string;
    tasks: any[];
    onTaskClick?: (task: any) => void; // Optional onTaskClick prop
}

export default function TaskList({ title, tasks, onTaskClick }: TaskListProps) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="bg-gray-100 p-2 mb-2 rounded cursor-pointer" // Added cursor-pointer for visual cue
                        onClick={() => onTaskClick && onTaskClick(task)} // Trigger onTaskClick when clicked
                    >
                        {task.taskType} - {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}