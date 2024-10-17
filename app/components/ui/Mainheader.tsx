import { TChildren } from "~/types";

const Mainheader = ({ children }: { children: TChildren }) => {
  return <div className="text-3xl text-center py-5">{children}</div>;
};

export default Mainheader;
