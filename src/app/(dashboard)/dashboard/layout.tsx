import Sidebar from "@/components/shared/Sidebar";




export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
       <main className="min-h-screen flex gap-4">
        <aside className="w-64">
        <Sidebar></Sidebar>
        </aside>
          <div className="flex-1">
          {children}
          </div>
        
       </main>
  )
}