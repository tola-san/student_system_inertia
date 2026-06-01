import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-800 text-white min-h-screen">

            <div className="p-5 border-b border-slate-700">
                <h1 className="text-xl font-bold">
                    Student System
                </h1>
            </div>

            <nav className="p-4">

                <ul className="space-y-2">

                    <li>
                        <Link
                            href="/dashboard"
                            className="block px-4 py-2 rounded-md hover:bg-zinc-950"
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/students"
                            className="block px-4 py-2 rounded-md hover:bg-zinc-950"
                        >
                            Students
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/courses"
                            className="block px-4 py-2 rounded-md hover:bg-zinc-950"
                        >
                            Courses
                        </Link>
                    </li>

                </ul>

            </nav>

        </aside>
    );
}