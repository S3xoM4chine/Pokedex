import "./Topbar.css";
import pokebola from "../images/pokebola.png"
import pokebola2 from "../images/pokebola2.png"

function Topbar() {
  return (
    <div className="titulo">
      <div className="titulo-esquerda">
        <p>Pokédex</p>
        <div className="capturado-visto">
          <div className="capturado">
            <img className="pokebola-img"
              src={pokebola}
              alt="pokebola"
            />
            <p>438</p>
          </div>
          <div className="visto">
            <img className="pokebola-img"
              src={pokebola2}
              alt="pokebola"
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{color: "white"}}>A -&gt; Z</p>
    </div>
  );
}

export default Topbar