import { useState } from "react";

const Profile = () => {
  // Initial Profile Data
  const profileInfo = {
    id: 1,
    name: "John Doe",
    age: 30,
  };

  // State to Hold Profile Information
  const [profileState, setProfileState] = useState(profileInfo);
  const [name, setName] = useState(profileInfo.name);
  const [age, setAge] = useState(profileInfo.age);

  // Function to Update Profile
  const updateProfile = () => {
    setProfileState({ ...profileState, name, age });
  };

  return (
    <>
      <div>Profile Information</div>
      <h1>Name: {profileState.name}</h1>
      <h1>Age: {profileState.age}</h1>

      {/* Input Fields */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
        />
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter new age"
        />
      </div>

      {/* Update Button */}
      <button onClick={updateProfile}>Update Profile</button>
    </>
  );
};

export default Profile;