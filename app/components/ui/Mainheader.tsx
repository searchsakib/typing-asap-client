import { TChildren } from "~/types";

const Mainheader = ({ children }: { children: TChildren }) => {
  return (
    <div className="text-4xl text-center py-8 font-medium">{children}</div>
  );
};

export default Mainheader;
