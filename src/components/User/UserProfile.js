import React from "react";
import styled from "styled-components";
import WeatherData from "../Weather/WeatherData";

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #89cff0;
  justify-content: space-between;
  font-size: 1rem;
  font-family: Roboto;
  width: 100%;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 0px;
    justify-content: center;
  }
  background-color: #f0f8ff;
  border-radius: 25px;
  color: #003262;
  box-shadow: 2px 6px 1px #003262;
  gap: 50px;
`;

const UserDetails = styled.div`
  font-size: $1.5rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    align-items: center;
  }
  flex-wrap: wrap;
  word-break: break-all;
  text-align: center;
`;

const WeatherDetails = styled.div`
  font-size: 1rem;
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
`;

const UserProfilePic = styled.img`
  width: 6rem;
  height: 8rem;
  border-radius: 25%;
  margin: 10px;
  box-shadow: 2px 8px 5px #89cff0;
`;

const UserStyledDiv = styled.div`
  font-size: ${({ $name }) => ($name ? "2.5rem" : "1rem")};
  @media (max-width: 600px) {
    font-size: ${({ $name }) => ($name ? "1.5rem" : "1rem")};
  }
`;

function UserProfile({ userdetails }) {
  return (
    <UserStyledDiv>
      <UserDetailsWrapper>
        <UserProfilePic src="/Profile_pic.png" alt="Profile Pic" />
        <UserDetails>
          <UserStyledDiv $name>
            <b>{userdetails.name}</b>
          </UserStyledDiv>
          <UserStyledDiv>
            <b>{userdetails.email}</b>
          </UserStyledDiv>
        </UserDetails>
        <WeatherDetails>
          <WeatherData />
        </WeatherDetails>
      </UserDetailsWrapper>
    </UserStyledDiv>
  );
}

export default UserProfile;
