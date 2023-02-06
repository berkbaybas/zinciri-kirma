import { useEffect, useState } from "react";

import { Calendar } from "antd";

import Cell from "./Cell";
import dayjs from "dayjs";
import ChainHeader from "./ChainHeader";

function Chain() {
  const [chainedDates, setChainedDates] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("chainedDates"));
    if (items) {
      console.log("sa");
      console.log(items);
      setChainedDates(items);
    }
  }, []);

  const today = dayjs().format("DD/MM/YYYY"); // '25/01/2019'

  const onSelectHandler = (selectedDay) => {
    const formatedSelectedDay = selectedDay.format("DD/MM/YYYY");
    if (
      formatedSelectedDay === today &&
      !chainedDates.includes(formatedSelectedDay)
    ) {
      console.log(chainedDates);
      setChainedDates([...chainedDates, formatedSelectedDay]);
      localStorage.setItem(
        "chainedDates",
        JSON.stringify([...chainedDates, formatedSelectedDay])
      );
    }
  };

  return (
    <Calendar
      dateFullCellRender={(date) => (
        <Cell date={date} chainedDates={chainedDates} />
      )}
      headerRender={({ value, type, onChange, onTypeChange }) => (
        <ChainHeader value={value} onChange={onChange} />
      )}
      // monthCellRender={monthCellRender}
      onSelect={onSelectHandler}
      fullscreen={false}
      style={{
        backgroundColor: "rgb(255 247 237)",
        padding: "32px",
      }}
    />
  );
}

export default Chain;
