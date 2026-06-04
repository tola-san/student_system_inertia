import AppSidebar from "@/Components/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen">
                <AppSidebar />

                <main className="flex-1 bg-gray-100 p-6">
                    <div className="flex justify-end mb-4">
                        <Button variant="outline" size="sm">
                            Logout
                        </Button>
                    </div>

                    {children}
                </main>
            </div>
    );
}