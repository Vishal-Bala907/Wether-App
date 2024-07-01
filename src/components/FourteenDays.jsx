import React from "react";
import { useSelector } from "react-redux";
import CreateWhetherCard from "./CreateWhetherCard";

export default function FourteenDays() {
  const day = useSelector((state) => state.whether.fourteenDay);
  return (
    <div>
      <CreateWhetherCard day={day} color={"bg-body-tertiary"} />
    </div>
  );
}
