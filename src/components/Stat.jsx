function Stat({ icon, title, value, color }) {
  const bgColorClass =
    {
      red: "bg-red-100",
      green: "bg-green-100",
      teal: "bg-teal-100",
      orange: "bg-orange-100",
    }[color] || " 0";

  const textColorClass =
    {
      red: "text-red-700",
      green: "text-green-700",
      teal: "text-teal-700",
      orange: "text-orange-700",
    }[color] || "text-gray-700";

  const valueColorClass =
    {
      red: "text-red-500",
      green: "text-green-500",
      teal: "text-teal-500",
      orange: "text-orange-500",
    }[color] || "text-gray-500";

  return (
    <div className="bg-white border border-gray-200 rounded-md px-5 py-3">
      <div className="flex items-center gap-3">
        <div
          className={`aspect-square w-10 h-10 rounded-sm flex items-center justify-center ${bgColorClass}`}
        >
          <div className={`${textColorClass} text-xl`}>{icon}</div>
        </div>
        <h5 className="text-base font-medium  tracking-wide text-gray-900">
          {title}
        </h5>
      </div>

      <p className={`text-2xl font-medium ${valueColorClass} text-right mt-2`}>
        {value}
      </p>
    </div>
  );
}

export default Stat;
