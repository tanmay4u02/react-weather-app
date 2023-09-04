const PrimaryButton = ({ text, onClickHandler, sx, disabled, type }) => {
  return (
    <button
      onClick={onClickHandler || null}
      disabled={disabled}
      type={type}
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
