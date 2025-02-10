import "./App.css";
import MiniCard from "./components/MiniCard/MiniCard";
import Navbar from "./components/Navbar/Navbar";

import Noticia from "./components/Noticia/Noticia";
const App = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Categorias</h2>
          </div>
          <div className="col-6 centro">
            <Noticia />
            <Noticia />
          </div>
          <div id="relacionados" className="col">
            <h2>Relacionados</h2>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
