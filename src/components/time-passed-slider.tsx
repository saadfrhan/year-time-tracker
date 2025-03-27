export default function TimePassedSlider({
  percentage,
}: {
  percentage: number;
}) {
  return (
    <div className="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden shadow-lg">
      <div
        className="h-full flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          width: `${percentage}%`,
          backgroundImage:
            "linear-gradient(to right, #38B2AC, #48BB78, #68D391)",
        }}
      >
        <p className="text-xl font-semibold text-white">
          {percentage.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
