// components/RequestForm.tsx
export default function RequestForm({ onClose }) {
    const taskTypes = ['Electrical', 'Plumbing', 'Room Cleaning', 'Wifi issue', 'AC fixing']

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded">
                <h2 className="text-xl font-semibold mb-4">New Request</h2>
                <form>
                    <select className="w-full mb-2 p-2 border rounded">
                        {taskTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <textarea
                        className="w-full mb-2 p-2 border rounded"
                        placeholder="Description"
                    ></textarea>
                    <input
                        type="date"
                        className="w-full mb-2 p-2 border rounded"
                    />
                    <input
                        type="time"
                        className="w-full mb-2 p-2 border rounded"
                    />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}