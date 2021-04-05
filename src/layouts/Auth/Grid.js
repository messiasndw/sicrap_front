import React from 'react';
import './index.css'
import Typography from '@material-ui/core/Typography';

export default function Grid({ leftbar, main, header }) {

    return (
        <div className="grid-container">
            <div className="Leftbar">{leftbar}</div>
            <div className="Main">
                <div className="mainContent">
                    {main}
                </div>
            </div>
            <div className="RightBar"></div>
            <div className="Header">
                <div className="headerContent" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {header}
                    </Typography>
                </div>
            </div>
        </div>
    );
}