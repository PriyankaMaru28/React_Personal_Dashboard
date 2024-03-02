import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  @media (max-width: 1230px) {
    flex-direction: column;
  }
  flex-direction: row;
  font-size: 1rem;
  font-family: Roboto;
  flex-wrap: wrap;
`;

const Weatherdiv = styled.div`
  padding: 0.1rem 0 0.5em 1rem;
  text-align: center;
`;

const Weatherh3 = styled.h3`
  text-align: center;
  text-decoration: underline;
`;

function Weather({ details, city }) {
  const {
    temperature,
    temperatureApparent,
    dewPoint,
    windSpeed,
    humidity,
    visibility,
  } = details;
  return (
    <>
      <div>
        <Weatherh3>Today's Weather in {city}</Weatherh3>
      </div>
      <Wrapper>
        <div>
          <Weatherdiv>
            Temperature : <b>{temperature} celsius</b>
          </Weatherdiv>
          <Weatherdiv>
            Feels like : <b>{temperatureApparent} celsius</b>
          </Weatherdiv>
        </div>
        <div>
          <Weatherdiv>
            dewPoint :<b>{dewPoint} celsius</b>{" "}
          </Weatherdiv>
          <Weatherdiv>
            Humidity :<b> {humidity} %</b>
          </Weatherdiv>
        </div>
        <div>
          <Weatherdiv>
            windSpeed : <b>{windSpeed} mph</b>
          </Weatherdiv>
          <Weatherdiv>
            Visibility : <b>{visibility} km</b>
          </Weatherdiv>
        </div>
      </Wrapper>
    </>
  );
}

export default Weather;
