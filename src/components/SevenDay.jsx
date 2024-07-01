import React from "react";
import CreateWhetherCard from "./CreateWhetherCard";
import { useSelector } from "react-redux";

export default function SevenDay() {
  const day = useSelector((state) => state.whether.sevenDay);
  return (
    <div>
      <CreateWhetherCard day={day} color={"bg-success-subtle"} />
    </div>
  );
}
