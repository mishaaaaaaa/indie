import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="m-0 p-0 min-h-screen flex flex-row test">
      <div className="basis-1/5">here will be sidebar</div>
      <div className="md:container md:mx-auto border border-indigo-500/100 basis-4/5">{children}</div>
    </div>
  );
}
