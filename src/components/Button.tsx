const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  themeColor,
}: any) => {
  //
  if (themeColor === "red") {
    var color = "rgb(239 68 68)";
  } else if (themeColor === "blue") {
    var color = "rgb(59 130 246)";
  } else if (themeColor === "purple") {
    var color = "rgb(188, 17, 219)";
  } else {
    var color = "rgb(34 197 94)";
  }
  //
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "colored-bg text-white colored-bdr"
      } rounded-full ${fullWidth && "w-full"}`}>
      {label}

      {iconURL && (
        <div className="ml-2 bg-white rounded-full w-9 h-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="rightarrow">
            <path
              d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
              fill={color}
              className="svgShape"></path>
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
