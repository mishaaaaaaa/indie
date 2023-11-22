import React, { ReactNode } from "react";
import "./styles/App.css";
// import "styles/App.css";
// import "styles/Contact.css";
// import "styles/MiniCalendar.css";
// import "styles/index.css";

// import dynamic from 'next/dynamic';

// const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

// const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
//   ssr: false,
// });

export default function AppLayout({ children }: { children: ReactNode }) {
  //general  layout for app

  return (
    <div className="m-0 p-0 min-h-screen flex flex-row test">
      <div className="basis-1/5">here will be sidebar</div>
      <div className="md:container md:mx-auto border border-indigo-500/100 basis-4/5">{children}</div>
    </div>
  );
}
