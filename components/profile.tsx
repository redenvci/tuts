
// name
// position
// about
// image
// pictureleft
// motto
// mottoContent

import React from "react";
import Image from "next/image";

export interface ProfileProps {
  name: string;
  position: string;
  about: string;
  image: string;
  pictureLeft: boolean;
  motto: string;
  mottoContent: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  position,
  about,
  image,
  pictureLeft,
  motto,
  mottoContent
}) => {
  return (
    <div>
      <Image src={image} alt={"profile image"} width={400} height={600} />
      <div className="font-medium text-3xl">{name}</div>
      <div className="font-medium text-xl">{position}</div>
      <div className="font-medium text-base">{about}</div>
    </div>
  );
}

export default Profile;