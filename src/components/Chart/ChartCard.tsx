import { ReactNode } from "react";

interface ChartProps {
  children: ReactNode;
  title: string;
}

function Chart({ children, title }: ChartProps) {
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        {title}
      </p>
      {children}
    </div>
  );
}

export default Chart;
