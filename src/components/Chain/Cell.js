import dayjs from "dayjs";

import chain_start from "../../chain_start.png";
import chain_mid from "../../chain_mid.png";
import chain_end from "../../chain_end.png";

const Cell = ({ date, chainedDates }) => {
  const renderedDate = date.format("DD/MM/YYYY");
  const today = dayjs().format("DD/MM/YYYY"); // '25/01/2019'

  const firstDate = chainedDates[0];
  const lastDate = chainedDates[chainedDates.length - 1];
  const midDates = chainedDates.slice(1, chainedDates.length - 1);

  let chainIcon = "";
  let scrollCssByIcon = "";
  if (chainedDates.includes(renderedDate)) {
    if (renderedDate === firstDate) {
      chainIcon = (
        <img
          src={chain_start}
          className="w-[100px] h-[135px] -rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          alt="TODO ALT"
        />
      );
      scrollCssByIcon = "left-10";
    } else if (renderedDate === lastDate) {
      chainIcon = (
        <img
          src={chain_end}
          className="w-[100px] h-[135px] -rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          alt="TODO ALT"
        />
      );
      scrollCssByIcon = "right-7";
    } else if (midDates.includes(renderedDate)) {
      chainIcon = (
        <img
          src={chain_mid}
          className="w-[100px] h-[165px] -rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50"
          alt="TODO ALT"
        />
      );
      scrollCssByIcon = "left-1/2";
    } else {
      scrollCssByIcon = "left-1/2";
    }
  }

  const motivationBadge =
    today === renderedDate && !chainedDates.includes(today);

  return (
    <div
      className={`relative flex-col items-center justify-center w-full h-16  bg-orange-50 ${
        motivationBadge
          ? "text-green-500 font-bold rounded-full border-2 border-dashed border-green-500 animate-bounce"
          : ""
      }`}
    >
      <span
        className={`absolute top-1/2 ${scrollCssByIcon} -translate-y-1/2 -translate-x-1/2 text-lg`}
      >
        {date.format("D")}
      </span>
      {chainIcon}
    </div>
  );
};

export default Cell;
