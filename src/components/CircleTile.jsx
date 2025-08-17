
export default function CircleTile({ label, emoji, onClick }) {
  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-2">
      <div className="size-24 rounded-full ring-1 ring-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-sm grid place-content-center transition hover:shadow-md">
        <span className="text-3xl select-none">{emoji}</span>
      </div>
      <span className="text-xs text-gray-700 line-clamp-1 group-hover:text-gray-900">{label}</span>
    </button>
  );
}