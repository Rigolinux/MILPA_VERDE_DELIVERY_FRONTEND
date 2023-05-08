import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">Acerca de</div>
                    <div className="text">
                        Negocio dedicado a la venta y distribución de burritos y quesadillas congeladas. 
                        Alta calidad en cocina mexicana. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacto</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Librería Monte Sinaí 79 Av norte
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 7127-2026</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: MilpaVerde@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Productos</div>
                    <span className="text">Burritos</span>
                    <span className="text">Quesadillas</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Inicio</span>
                    <span className="text">Proveedores</span>
                    <span className="text">Productos</span>
                    <span className="text">Users</span>
                    <span className="text">Acerca de</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        MilpaVerde 2023 CREATED BY Stark Team. 
                    </span>
                    {/* <img src={Payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
