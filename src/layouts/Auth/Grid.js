import React from 'react';
import './index.css'
import Typography from '@material-ui/core/Typography';
import CardComponent from '@material-ui/core/Card'
import useStyles from './styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function Grid({ leftbar, main, header }) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const gridTemplateColumns = matches ? "20vw 80vw" : "20vw 70vw 10vw"

    const classes = useStyles()
    
    return (
        <div className="grid-container" style={{gridTemplateColumns: gridTemplateColumns}} >
            <div className="Leftbar ">{leftbar}</div>
            <div className="Main containerChild">
                <div className="mainContent" style={{display:"flex", justifyContent:"center", width:"90%"}}>
                    {main}
                </div>
            </div>
            <div className="RightBar containerChild"></div>
            <div className="Header containerChild" style={{ padding: "20px" }}>
                
                <div className="headerContent" style={{ width: "90%", height: "100%", margin: "auto", textAlign: "left" }}>
                    
                    <CardComponent classes={{ root: classes.headerRoot }}>
                        <Typography classes={{ root: classes.headerText }} variant="h4" component="h2" gutterBottom>
                            {header}
                        </Typography>
                    </CardComponent>

                </div>
            </div>
        </div>
    );
}