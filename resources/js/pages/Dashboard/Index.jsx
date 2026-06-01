import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
    return (
        <AppLayout>

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <div className="grid grid-cols-4 gap-4 mt-6">

                <div className="bg-white p-5 rounded shadow">
                    Students: 150
                </div>

                <div className="bg-white p-5 rounded shadow">
                    Courses: 8
                </div>

                <div className="bg-white p-5 rounded shadow">
                    Teachers: 12
                </div>

                <div className="bg-white p-5 rounded shadow">
                    Graduates: 45
                </div>

            </div>

        </AppLayout>
    );
}