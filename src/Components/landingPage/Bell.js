import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Bell() {
    return (
        <div>
            <div className="bell d-flex jcen acen" style={{ border: '2px solid white', width: '150px', height: '150px', borderRadius: '50%' }}>
                <div className="bellInner transBack d-flex acen" style={{ justifyContent:'flex-start', borderRadius: '50%', width: '100px', height: '100px', padding: '10px' }}>
                    <NotificationsIcon style={{ fontSize: '50px', color: '#673ade' }} />
                </div>
            </div>
        </div>
    )
}
