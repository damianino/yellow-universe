"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { Wrapper } from "@/components/Timeline/TimelinePath/styled";
import { useOnSwipe } from "@/hooks/useSwipe";
import { useWheelStopListener } from "@/hooks/useWheelStopListener";
import "./style.css";

interface TickData {
  pos: number;
  x: number;
  y: number;

  isCentral: boolean;
  i: number;
}

const pathCenterPos = 2445;

interface Props {
  ticksCount: number;
  defaultSelected?: number;
  setSelected: (i: number) => void;
}

const TimelinePath = ({
  ticksCount,
  defaultSelected = 0,
  setSelected,
}: Props) => {
  defaultSelected = ticksCount - defaultSelected - 1;
  // const onSwipe = useOnSwipe()
  // const createWheelStopListener = useWheelStopListener()

  const [ticksData, setTicksData] = useState<TickData[]>([]);
  const [isSwipeBlocked, setIsSwipeBlocked] = useState(false);

  const screenWidthRef = useRef(0);
  const ticksDataRef = useRef(ticksData);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGGeometryElement>(null);
  const tickRefs = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    screenWidthRef.current = window.innerWidth;
  });

  useEffect(() => {
    if (pathRef.current == null) return;

    let initTicksData: TickData[] = [];
    for (let i = 0; i < ticksCount; i++) {
      const pos = 200 * (i - defaultSelected) + pathCenterPos;

      const p = pathRef.current.getPointAtLength(pos);

      initTicksData.push({
        pos,
        x: p.x,
        y: p.y,

        isCentral: i == defaultSelected,
        i: i,
      });
    }
    setTicksData(initTicksData);
  }, [pathRef]);

  // const removeWheelStopListenerRef = useRef(() => {})
  // useEffect(() => {
  //     if (wrapperRef.current == null) return

  //     removeWheelStopListenerRef.current()
  //     removeWheelStopListenerRef.current = createWheelStopListener(wrapperRef.current, snapClosestTickToCenter, 100)
  // }, [wrapperRef]);

  // useEffect(() => {
  //     if(svgWrapperRef.current == null){
  //         return
  //     }
  //     onSwipe(svgWrapperRef.current, (deltaX, deltaY) => {
  //         if (isSwipeBlocked) return
  //         setTicksData((prev) => [...ScrollTimelineBy(prev, deltaX)])
  //     },
  //         (velocityX: number, velocityY: number) => {
  //             velocityX *= -1
  //             const intervalId = setInterval(() => {
  //                 setTicksData((prev) => [...ScrollTimelineBy(prev, velocityX)])

  //                 velocityX *= 0.95;

  //                 if (Math.abs(velocityX) < 0.01) {
  //                     snapClosestTickToCenter()
  //                     clearInterval(intervalId);
  //                 }
  //             }, 10);
  //         })
  // }, [svgWrapperRef]);

  const ScrollTimelineBy = useCallback(
    (ticksData: TickData[], offset: number): TickData[] => {
      if (offset == 0) {
        return ticksData;
      }

      const maxOutBoundaryOffset = 400;
      let speed = 0.5;

      if (ticksData[0].pos > pathCenterPos) {
        speed *=
          (maxOutBoundaryOffset + pathCenterPos - ticksData[0].pos) /
          maxOutBoundaryOffset;
      }
      if (ticksData[ticksData.length - 1].pos < pathCenterPos) {
        speed *=
          (maxOutBoundaryOffset -
            pathCenterPos +
            ticksData[ticksData.length - 1].pos) /
          maxOutBoundaryOffset;
      }

      for (let i = 0; i < tickRefs.current.length; i++) {
        if (
          tickRefs.current[i] == null ||
          pathRef.current == null ||
          offset == 0
        ) {
          return ticksData;
        }

        const newPos = ticksData[i].pos + offset * speed;

        const p = pathRef.current.getPointAtLength(newPos);

        ticksData[i] = {
          pos: newPos,
          x: p.x,
          y: p.y,

          isCentral: false,
          i: ticksData[i].i,
        };
      }

      return ticksData;
    },
    [ticksData]
  );

  useEffect(() => {
    ticksDataRef.current = ticksData;
  }, [ticksData]);

  const snapClosestTickToCenter = useCallback(() => {
    let closestIndex = 0;
    let minD = 9999;
    for (let i = 0; i < ticksDataRef.current.length; i++) {
      if (Math.abs(ticksDataRef.current[i].pos - pathCenterPos) >= minD)
        continue;
      closestIndex = i;
      minD = Math.abs(ticksDataRef.current[i].pos - pathCenterPos);
    }

    snapTickToCenter(closestIndex);
  }, []);

  const snapTickToCenter = useCallback((i: number) => {
    setIsSwipeBlocked(true);

    const velocity = 1 * (ticksDataRef.current[i].pos > pathCenterPos ? -1 : 1);
    const interval = setInterval(() => {
      setTicksData([
        ...ScrollTimelineBy(
          ticksDataRef.current,
          (velocity * Math.abs(ticksDataRef.current[i].pos - pathCenterPos)) / 4
        ),
      ]);
      if (Math.abs(ticksDataRef.current[i].pos - pathCenterPos) < 1) {
        ticksDataRef.current[i].isCentral = true;
        setTicksData([...ticksDataRef.current]);
        clearInterval(interval);
        setIsSwipeBlocked(false);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // const onWheel = (e: WheelEvent<HTMLDivElement>) => {
  //     if(isSwipeBlocked) return
  //     setTicksData((prev) => [...ScrollTimelineBy(prev, e.deltaX)])
  // }

  const onTickSelect = useCallback((i: number) => {
    snapTickToCenter(i);
    setSelected(i);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <div ref={svgWrapperRef}>
        <svg
          viewBox="0 0 1440 207"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <defs>
              <filter
                id="drop-shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="8"
                  floodColor="#E3D641"
                  floodOpacity="1"
                />
              </filter>
            </defs>
          </defs>

          <path
            ref={pathRef}
            d="M1540 205C1414.92 205 651.433 205 635.15 205C614.796 205 582.96 198.5 582.96 155C582.96 120.2 617.753 107.167 635.15 105C702.822 105 1268.41 105 1283.86 105C1303.17 105 1337.1 100 1337.1 54C1337.1 17.2 1301.61 4.66667 1283.86 3C1089.37 3 152.399 3 137.786 3C119.519 3 84.5525 3 84.5525 54C84.5525 94.8 120.041 105 137.786 105H278.175C295.571 105.333 330.364 115.8 330.364 155C330.364 194.2 295.571 204.667 278.175 205H-100"
            stroke="#E3D641"
            strokeWidth="5"
            strokeDasharray="15 15"
          />
          <g>
            {ticksData.map((td, i) => (
              <div key={i}>
                <circle
                  className={td.isCentral ? "central" : ""}
                  key={i}
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                  ref={(el: SVGCircleElement) => (tickRefs.current[i] = el)}
                  r={screenWidthRef.current > 500 ? 25 : 50}
                  cx={td.x}
                  cy={td.y}
                  filter={td.isCentral ? "url(#drop-shadow)" : ""}
                  fill={td.isCentral ? "#E3D641" : "#000"}
                  stroke={td.isCentral ? "" : "#D9D9D9"}
                  width="10px"
                  height="30px"
                  onClick={isSwipeBlocked ? undefined : () => onTickSelect(i)}
                />

                <text
                  className="svgText"
                  x={td.x}
                  y={td.y}
                  // x="50%" y="50%"
                  fill={td.isCentral ? "#000" : "#D9D9D9"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {ticksData.length - i == 9 ? ticksData.length - i : "?"}
                </text>
              </div>
            ))}
          </g>
        </svg>
      </div>
    </Wrapper>
  );
};

export default TimelinePath;
