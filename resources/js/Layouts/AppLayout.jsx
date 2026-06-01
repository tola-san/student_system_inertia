import Sidebar from '@/Components/Sidebar';


export default function AppLayout({ children }) {
    return (
        <div className="flex">

            <Sidebar />

            <main className="flex-1 bg-gray-100 min-h-screen p-6">
            
                {children}
            </main>

        </div>
    );
}