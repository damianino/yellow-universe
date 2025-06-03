"use client";

import { useEffect, useState } from "react";
import { Container, Frame, TimeDiv } from "./styles";
import Image from "next/image";

export default function Timer() {
  // Задай здесь дату, до которой будет отсчет
  const targetDate = new Date("2025-06-29T20:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatDays = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days} days`;
  };

  const formatClock = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <Container>
      <Frame>
        <Image src="/time-frame.svg" width={582} height={361} alt="frame" />
        <TimeDiv>
          <span style={{ fontFamily: "Hvd" }}>{formatDays(timeLeft)}</span>
          <span style={{ fontFamily: "BlackNight" }}>
            {formatClock(timeLeft)}
          </span>
        </TimeDiv>
      </Frame>
    </Container>
  );
}
