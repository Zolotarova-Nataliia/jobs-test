import styled from "styled-components";
export const Item = styled.li`
  background: #eff0f5;
  border-radius: 8px;
  display: flex;
  height: 206px;
  padding: 13px 16px;
  width: 100%;
  margin-bottom: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow ease 250ms;
  @media screen and (min-width: 1280px) {
    padding: 16px 24px;
    height: 164px;
    background: #ffffff;
  }
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14),
      0px 5px 3px -1px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const ImgWrap = styled.div`
  width: 66px;
  height: 66px;
  margin: 32px 0px 95px 0;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media screen and (min-width: 1280px) {
    width: 85px;
    height: 85px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 19px;
  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    margin-left: 26px;
    justify-content: space-between;
  }
`;

export const UpperSec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #878d9d;
  font-size: 14px;
  margin-bottom: 14px;
`;

export const SubSec = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    margin-left: 32px;
  }
`;

export const SaveBtn = styled.button`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    background: transparent;
  }
`;

export const JobName = styled.p`
  color: #384564;
  font-size: 18px;
  margin-bottom: 7px;
`;

export const JobTitle = styled.p`
  color: #878d9d;
  font-size: 16px;
  margin-bottom: 7px;
`;

export const JobAdress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: #878d9d;
  font-size: 16px;
`;
