import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {

    const profileList = [
        {
            name: "Alex",
            age: 25,
            bio: "A software engineer who loves hiking"
        },
        {
            name: "Sherly",
            age: 26,
            bio: "A designer passionate about photography"
        },
        {
            name: "Jas",
            age: 26,
            bio: "An artist who likes coding"
        }
    ]

    return (
        <div>
            <h1>User Profiles</h1>
            {profileList.map(
                (profile, idx) => <ProfileCard key={idx} profile={profile} />
            )}
        </div>
    );

}

export default ProfileContainer;