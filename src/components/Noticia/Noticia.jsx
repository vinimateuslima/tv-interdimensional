import "./Noticia.css";

const Noticia = () => {
  return (
    <div className="noticia">
      <div className="titulo">
        <h1>Esta é uma notícia</h1>
      </div>
      <div className="imagem">
        <img className="imagem" src="https://placehold.co/600x400" alt="" />
      </div>

      <div className="texto">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          accusamus atque perferendis possimus accusantium reprehenderit. Esse
          minima dolore eum porro reprehenderit id. Porro similique itaque
          commodi aliquid optio recusandae aperiam!
        </p>
      </div>
    </div>
  );
};

export default Noticia;
