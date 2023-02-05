import { GrClose } from "react-icons/gr";
import dayjs from "dayjs";
import { useEffect } from "react";

const Cell = ({ date, chainedDates }) => {
  const renderedDate = date.format("DD/MM/YYYY");
  const today = dayjs().format("DD/MM/YYYY"); // '25/01/2019'

  const motivation = today === renderedDate && !chainedDates.includes(today);

  return (
    <div
      className={`relative flex-col items-center justify-center w-full h-16  bg-slate-100 ${
        motivation ? "border-2 border-dashed border-green-400" : ""
      }`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg">
        {date.format("DD")}
      </span>
      {chainedDates.includes(renderedDate) && (
        // <img
        //   className="-rotate-90 w-[64px] h-[135px]"
        //   src={chain_mid}
        //   alt="TODO ADD ALT"
        // />
        <GrClose className="w-full h-full" />
      )}
    </div>
  );
};

export default Cell;
