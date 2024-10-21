import type { MetaFunction } from "@remix-run/node";
import Homepage from "~/pages/Homepage/Homepage";

export const meta: MetaFunction = () => {
  return [
    { title: "Typing ASAP" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Homepage></Homepage>
    </div>
  );
}
