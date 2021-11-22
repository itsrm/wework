import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Bell() {
    return (
        <div className="d-flex jcen acen">
            <div className="bell d-flex jcen acen" style={{ border: '2px solid white', width: '200px', height: '200px', borderRadius: '50%' }}>
                <div className="bellInner transBack d-flex acen" style={{ justifyContent:'flex-start',  borderRadius: '50%', width: '160px', height: '160px', padding: '10px' }}>
                    <div className="bellWrapper" style={{ position: 'relative',}}>
                        <NotificationsIcon style={{ fontSize: '70px', color: '#673ade'}} />
                        <div className="redNotif"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
