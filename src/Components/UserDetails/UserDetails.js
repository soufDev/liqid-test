import React from "react";
import { UserDetailsScreen } from "./UserDetailsScreen";
import { Title } from "./Title";
import { StyledWrapperInfo } from "./UserDetailsScreen.styled";
import UserImage from "./UserImage";
import UserDetailsInfo from "./UserDetailsInfo";
import { GoBack } from "./GoBack";

export const UserDetails = () => {
  return (
    <UserDetailsScreen>
      <GoBack />
      <Title text="Details" />
      <StyledWrapperInfo>
        <UserImage />
        <UserDetailsInfo />
      </StyledWrapperInfo>
    </UserDetailsScreen>
  );
};
