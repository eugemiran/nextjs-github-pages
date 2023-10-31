"use client";
import { PropsWithChildren, useEffect, useState } from "react";

const OutreachProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const init = async () => {
      const { default: extensibilitySdk } = await import(
        "@outreach/extensibility-sdk"
      );
      const outreachContext = await extensibilitySdk.init();
      const storedValue = localStorage.getItem("storedValue") || "0";
      console.log("storedValue", storedValue);
      extensibilitySdk.onLoad = (ctx: any) => {
        console.log("Loaded <<<<<<", ctx);

        setUser(outreachContext.user);
        console.log(extensibilitySdk.getRuntime().configuration);
      };
    };

    init();
  }, []);

  return <>{children}</>;
};

export default OutreachProvider;
