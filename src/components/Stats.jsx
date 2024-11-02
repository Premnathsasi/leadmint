import {
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlineArrowDown,
} from "react-icons/hi2";
import Stat from "./Stat";

const statsData = [
  { title: "Users", value: 140, icon: <HiOutlineUserGroup />, color: "red" },
  {
    title: "Referral Users",
    value: 64,
    icon: <HiOutlineUser />,
    color: "green",
  },
  {
    title: "Today's Organic User",
    value: 76,
    icon: <HiOutlineCalendar />,
    color: "orange",
  },
  {
    title: "This Week Users",
    value: 679,
    icon: <HiOutlineClock />,
    color: "teal",
  },
  {
    title: "This Month Users",
    value: 2272,
    icon: <HiOutlineAcademicCap />,
    color: "green",
  },
  {
    title: "Last Month Users",
    value: 71292,
    icon: <HiOutlineArrowDown />,
    color: "red",
  },
];

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <Stat
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
}

export default Stats;
