import { Link } from "react-router-dom";

export const HeroCard = ({ 
    id,
    nombre,
    referencia,
    categoria,
    cantidad,
    urlFoto,
 }) => {

    const heroImageUrl = urlFoto;

    // const charactersByHero = (<p>{ characters }</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } alt={nombre} className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ nombre }</h5>
                            <p className="card-text">{ categoria }</p>
                            {/* <p>{ characters }</p> */}
                            {/* {
                                (alter_ego !== characters ) && characterByHero
                            } */}
                            <p className="card-text">
                                <small className="text-muted">{ cantidad }</small>
                            </p>
                            <Link to={`/producto/${ id }`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
