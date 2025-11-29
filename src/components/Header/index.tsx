import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-around p-4">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </header>
    )
}