import Link from "next/link";

function Icon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-4 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.328 6.83a5.903 5.903 0 0 1-1.439 3.64 2.874 2.874 0 0 0-.584 1v1.037a.95.95 0 0 1-.95.95h-3.71a.95.95 0 0 1-.95-.95V11.47a2.876 2.876 0 0 0-.584-1A5.903 5.903 0 0 1 .67 6.83a4.83 4.83 0 0 1 9.28-1.878 4.796 4.796 0 0 1 .38 1.88zm-.95 0a3.878 3.878 0 0 0-7.756 0c0 2.363 2.023 3.409 2.023 4.64v1.037h3.71V11.47c0-1.231 2.023-2.277 2.023-4.64z" />
      <path d="M7.83 14.572a.475.475 0 0 1-.475.476h-3.71a.475.475 0 0 1 0-.95h3.71a.475.475 0 0 1 .475.474z" />
      <path d="M7.19 15.834a.238.238 0 0 1-.078.265 2.669 2.669 0 0 1-3.274 0 .237.237 0 0 1 .145-.425h2.983a.238.238 0 0 1 .225.16z" />
    </svg>
  );
}

export default function LightBulb() {
  return (
    <Link href="/idea">
      <Icon className="w-48 h-48 fill-white cursor-pointer drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-105 transition-all duration-200 active:scale-95" />
    </Link>
  );
}
