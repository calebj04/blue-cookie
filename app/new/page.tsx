"use client";

import { useStatus } from "@/components/providers/StatusProvider";
import Start from "@/components/new-pages/Start";
import Customize from "@/components/new-pages/Customize";
import Loading from "@/components/new-pages/Loading";
import Result from "@/components/new-pages/Result";
import Error from "@/components/new-pages/Error";

export default function Idea() {
  const { status } = useStatus();

  switch (status) {
    case "start":
      return <Start />;
    case "customize":
      return <Customize />;
    case "loading":
      return <Loading />;
    case "result":
      return <Result />;
    case "error":
      return <Error />;
    default:
      return <Error />;
  }
}
