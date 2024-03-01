import Link from "next/link";

export default function CandyCrushLayout() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg className="absolute top-0 left-0 w-full h-full">
        <path
          className="line"
          d="M 50 100 Q 100 150 150 100"
          fill="none"
          stroke="blue"
          strokeWidth="3"
        />
      </svg>
      <div className="flex flex-col items-center relative">
        <div className="level">1</div>
        <div className="level">2</div>
        {/* Add more levels as needed */}
      </div>
    </div>
  );
}
