import { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import { Chunk } from "./styled";
const FadeText = ({ text, visible }: { text: string; visible: boolean }) => {
  const [chunksLoaded, setChunksLoaded] = useState(
    Array(text.split("\n").length).fill(false)
  );

  const chunked = useMemo(() => {
    text.replaceAll("\n\n", "\na\n");
    return text.split("\n");
  }, [text]);

  useEffect(() => {
    if (!visible) {
      setChunksLoaded(Array(text.split("\n").length).fill(false));
      return;
    }

    for (let i = 0; i < chunksLoaded.length; i++) {
      setTimeout(() => {
        let tmp = [
          ...Array(i).fill(true),
          ...Array(chunksLoaded.length - i).fill(false),
        ];
        setChunksLoaded(tmp);
      }, i * 200);
    }
  }, [visible]);

  return (
    <div className={`fadetext`}>
      {chunked.map((chunk, i) => {
        return chunk != "" ? (
          <Chunk key={i} inview={chunksLoaded[i]}>
            {chunk.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </Chunk>
        ) : (
          <br />
        );
      })}
    </div>
  );
};

export default FadeText;
