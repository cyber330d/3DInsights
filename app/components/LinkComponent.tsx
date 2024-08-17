import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

interface LinkProps {
  label?: string;
  to: string;
  className?: string;
  props?: {};
  children?: React.ReactNode;
}
export default function LinkComponent(
  { label, to, className, children }: LinkProps
) {
  return (
    <div
      className={`flex items-center justify-center border-b-[2px] py-2 hover:text-lms-green transition border-transparent hover:border-lms-green  ${className}`}
    // mx-3 
    >
      <Link href={to}> {label}</Link>
      {children}
    </div>
  );
}
