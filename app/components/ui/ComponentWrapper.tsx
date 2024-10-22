import { TChildren } from "~/types";

const ComponentWrapper = ({ children }: { children: TChildren }) => {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-3 md:px-6">
      {children}
    </div>
  );
};

export default ComponentWrapper;
