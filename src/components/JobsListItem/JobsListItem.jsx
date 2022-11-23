import { parseISO, formatDistance } from "date-fns";
import { Rating } from "@mui/material";
import {
  ImgWrap,
  InfoWrap,
  Item,
  JobAdress,
  JobName,
  JobTitle,
  SaveBtn,
  SubSec,
  UpperSec,
} from "./JobsListItem.styled";
import { useState } from "react";

export default function JobsListItem({
  id,
  name,
  createdAt,
  address,
  pictures,
  title,
}) {
  const [value, setValue] = useState(null);
  const dateFormatted = formatDistance(parseISO(createdAt), new Date());

  return (
    <Item key={id}>
      <ImgWrap>
        <img src={pictures[0]}></img>
      </ImgWrap>

      <InfoWrap>
        <UpperSec>
          <Rating
            sx={{
              fontSize: "12px",

              "& .MuiRating-iconFilled": {
                color: "#384564",
              },
              "@media screen and (min-width: 1280px)": {
                fontSize: "18px",
              },
            }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <SubSec>
            <p>Posted {dateFormatted}</p>
            <SaveBtn>
              <svg
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z"
                  stroke="#70778B"
                  strokeWidth="2"
                />
              </svg>
            </SaveBtn>
          </SubSec>
        </UpperSec>
        <div>
          {" "}
          <JobName>{name}</JobName>
          <JobTitle>{title}</JobTitle>
          <JobAdress>
            <svg
              style={{
                marginRight: 7,
              }}
              width="13"
              height="18"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                fill="#878D9D"
              />
            </svg>

            <p>{address}</p>
          </JobAdress>
        </div>
      </InfoWrap>
    </Item>
  );
}
