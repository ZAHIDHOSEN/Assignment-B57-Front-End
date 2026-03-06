import Sidebar from "@/components/shared/Sidebar";




export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
       <main className="min-h-dvh flex gap-4">
        <Sidebar></Sidebar>
        {children}
       </main>
  )
}