// TODO (3-qadam): Bu layout Sidebar komponentini o'z ichiga olishi kerak.
//
// Tugallangan ko'rinish:
//
// import { Sidebar } from "@/components/chat/Sidebar"
//
// export default function ChatLayout({ children }) {
//   return (
//     <div className="flex h-screen overflow-hidden bg-background">
//       <Sidebar />
//       <main className="flex-1 flex flex-col min-w-0">{children}</main>
//     </div>
//   )
// }

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* TODO: bu yerga <Sidebar /> qo'shing (3-qadam) */}
      <main className="flex-1 flex flex-col min-w-0">{children}</main>
    </div>
  )
}
