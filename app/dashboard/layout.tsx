// import Logo from "@/app/components/Logo";
import Sidebar from "@/app/dashboard/Sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-1 pl-72  bg-green-50 scroll-smooth">
      <Sidebar />
      {children}
    </div>
  );
}
