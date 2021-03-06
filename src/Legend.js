import React from "react";

const Legend = (props) => {
    return (
        <div id="hex-legend" class="legend">
            <h4>Hex Color Legend</h4>
            <div>
                <span style={{ background: "black" }}></span>Searched Location
            </div>
            <div>
                <span style={{ background: "#0074D9" }}></span>Helium Hotspot
            </div>
            <div>
                <span style={{ background: "#F66F67" }}></span>Too close to witness
            </div>
            {props.sweetspotToggle && (
                <div>
                    <span style={{ background: '#A8C686' }}></span>Sweet spot
                </div>
            )}
        </div>
    );
};

export default Legend;