interface primaryButtonProp {
  buttonText: string;
}
const PrimaryButton = ({ buttonText }: primaryButtonProp) => {
  return (
    <button
      type="button"
      className="w-full h-10 px-4 py-2.5 bg-red-500 rounded justify-start items-center gap-2 inline-flex"
    >
      <span className="text-white text-sm font-normal leading-tight">
        {buttonText}
      </span>
    </button>
  );
};

export default PrimaryButton;
