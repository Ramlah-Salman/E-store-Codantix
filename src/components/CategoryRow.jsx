import { Link, useParams } from "react-router-dom";
import { classNames } from "../utils/classNames.js";

export default function CategoryRow({ id, name, icon }) {
  const params = useParams();
  const active = params.id === id;
  return (
    <Link
      to={`/category/${id}`}
      className={classNames(
        "flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer",
        active ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200" : "text-gray-700 hover:bg-white/60"
      )}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
}
