import React from "react";

const ProfileCard = ({ profile }) => {

    return (
        <div className="profile-card">
            <div><span className="profile-label">Name:</span><span className="profile-value">{profile.name}</span></div>
            <div><span className="profile-label">Age:</span><span className="profile-value age-value">{profile.age}</span></div>
            <div><span className="profile-label">Bio:</span><span className="profile-value">{profile.bio}</span></div>
        </div>
    );

};

export default ProfileCard;
