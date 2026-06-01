export default function StudentTable({ students = [] }) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto rounded-xl shadow-sm border border-zinc-200">
                <table className="w-full bg-white">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="px-6 py-4 text-left font-semibold">Student ID</th>
                            <th className="px-6 py-4 text-left font-semibold">Name</th>
                            <th className="px-6 py-4 text-left font-semibold">Course</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {students.map((student) => (
                            <tr 
                                key={student.id}
                                className="hover:bg-gray-50 transition-colors duration-150"
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {student.id}
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    {student.name}
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    {student.course}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {students.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200 mt-4">
                    <p className="text-gray-500 text-lg">No students found</p>
                </div>
            )}
        </div>
    );
}