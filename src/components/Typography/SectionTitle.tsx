import { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
}

export default SectionTitle;
