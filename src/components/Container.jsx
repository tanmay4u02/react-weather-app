const Container = ({ sx, children }) => {
  return (
    <div
      className={`p-3 flex-grow bg-white rounded-md drop-shadow-lg ${sx}`}
      style={{ height: "450px" }}
    >
      {children}
    </div>
  );
};

export default Container;
