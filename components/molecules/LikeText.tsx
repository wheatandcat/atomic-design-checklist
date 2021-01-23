import { useState } from "react";

const LikeText = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col">
      <div
        onClick={() => setLike(!like)}
        className="cursor-pointer text-red-300"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill={like ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      {like && <div className="text-red-300">{like ? 1 : 0}</div>}
      {!like && <div>{like ? 1 : 0}</div>}
    </div>
  );
};

export default LikeText;
