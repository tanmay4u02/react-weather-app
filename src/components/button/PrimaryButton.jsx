const PrimaryButton = ({ text, onClickHandler, sx, disabled }) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={
        sx +
        " text-gray-100 font-medium text-sm bg-slate-900 active:bg-slate-700 disabled:opacity-50 "
      }
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
