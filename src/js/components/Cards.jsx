import React from "react";

const Cards = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            {[1, 2, 3].map((_, index) => (
                <div className="card" style={{ width: "14rem" }} key={index}>
                    <img
                        src="https://a.travel-assets.com/findyours-php/viewfinder/images/res60/481000/481691-Ocean-View-Norfolk.jpg"
                        className="card-img-top"
                        alt="Vista al mar"
                        style={{ height: "100px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Vista al mar</h5>
                        <p className="card-text">
                            Un texto de ejemplo para mostrar el contenido de esta tarjeta.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Ir a lugar
                        </a>
                    </div>
                </div>
            ))}
        </div>

    )

}

export default Cards;