import React from 'react';
import "./profileImage.scss";
import Link from "next/link"

const ProfileImage = () => {
    return (
        <div className='pIlD'>
            <Link href="/profile" className="pL">
                <img src="/images/profileImage/chaechae1.jpg" alt="" />
                <span className="popupcha">
                    Profile
                </span>
            </Link>
            <div className="dropD">
                <div className="arr-down">
                    <svg aria-hidden="true" aria-label="" className="BNH gUZ U9O kVc" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0"></path></svg>
                    <span className="popupcha">Documents</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileImage