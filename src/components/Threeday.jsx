import { useSelector } from "react-redux";
import CreateWhetherCard from "./CreateWhetherCard";

export default function Threeday() {
  const day = useSelector((state) => state.whether.threeDay);
  return (
    <>
      <CreateWhetherCard day={day} color={"bg-primary-subtle"} />
    </>
  );
}
