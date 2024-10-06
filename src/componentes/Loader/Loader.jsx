import "./Loader.css";
import loadingGif from "/img/carga.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
