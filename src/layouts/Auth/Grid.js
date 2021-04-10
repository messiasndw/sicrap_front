import React from 'react';
import './index.css'
import Typography from '@material-ui/core/Typography';
import CardComponent from '../../components/Card'
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
            <div className="Header" style={{padding:"20px"}}>
                <div className="headerContent" style={{width:"85%", height: "100%", margin:"auto", textAlign:"right"}}>
                    <CardComponent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {header}
                    </Typography>
                    </CardComponent>
                    
                </div>
            </div>
        </div>
    );
}