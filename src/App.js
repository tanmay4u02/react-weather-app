import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
