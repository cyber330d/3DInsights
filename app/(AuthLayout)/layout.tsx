import Logo  from "@/app/components/Logo";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-8 pt-16 flex-col justify-center items-center h-screen w-full">
        {/* form container */}
        {children}
    </div>
  );
}
