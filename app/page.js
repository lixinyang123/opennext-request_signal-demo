"use client"

import { useEffect, useRef } from "react";

export default function Home() {
  const eventSource = useRef(null);

  useEffect(() => {
    eventSource.current = new EventSource("/api/sse");

    eventSource.current.onmessage = (event) => {
      console.log(event)
    };

    eventSource.current.onerror = () => {
      eventSource.current?.close();
    };

    return () => {
      eventSource.current?.close();
    };
  }, []);

  return (
    <p>Hello</p>
  );
}
