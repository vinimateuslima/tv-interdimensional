import './MiniCard.css'

const MiniCard = () => {
  return (
    <>
    <div className="minicard">
      <div className="imagem">
        <img src="https://placehold.co/150x150" alt="" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h4>Noticia de exemplo</h4>
        </div>
        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            consequatur eligendi ratione repellendus. Dolore ea commodi
            molestias.
          </p>
        </div>
      </div>
      
    </div>
    <hr className='linha'/>
    </>
  );
};

export default MiniCard;
