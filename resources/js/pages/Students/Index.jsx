import AppLayout from '@/Layouts/AppLayout';
import StudentTable from '@/Components/StudentTable';

export default function Index({ students }) {
    return (
        <AppLayout>
            <h1 className="text-3xl font-bold mb-5">
                Students
            </h1>

            <StudentTable students={students} />
        </AppLayout>
    );
}