import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widget.css';

const Widget = () => {

    
    return (
        <div className= "widget">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>


            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>How do I get into Google?</h4>
                    <p>1d ago • 25,698 reader</p>
                </div>
            </div>

            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>Hiring in LinkedIn</h4>
                    <p>4d ago • 30,698 reader</p>
                </div>
            </div>
            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>Coronavirus: India Updates</h4>
                    <p>6d ago • 2,460 readers</p>
                </div>
            </div>
            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>How to know if you work best remotely?</h4>
                    <p>2d ago • 518 readers</p>
                </div>
            </div>
            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>Bitcoin rides roller coaster</h4>
                    <p>1d ago • 21,987 readers</p>
                </div>
            </div>
        </div>
    )
}

export default Widget
