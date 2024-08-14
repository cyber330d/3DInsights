import Image from "next/image";

// export default function Logo() {
//     return <div className="w-full flex items-center justify-start gap-4 text-lms-green2 cursor-pointer text-2xl">
//         Temp Logo
//     </div>;
// }



export default function Logo() {
    return <div className="w-full flex items-center justify-start h-full text-lms-green cursor-pointer text-2xl">
        <Image src="/logo.png" width="300" height="100" alt="3dInsights logo" />
    </div>;
}
