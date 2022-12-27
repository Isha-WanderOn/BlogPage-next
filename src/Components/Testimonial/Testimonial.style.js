import styled from "styled-components";
import Image from "next/image";

export const TestimonialContainer = styled.div`
  margin-top: 5vw;
  padding: 20px;
  position: relative;
`;
export const TestimonialDiv = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  height: fit-content;
`;
export const TestimonialHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  font-weight: 600;
  color: #045d51;
`;

export const HeadingImg = styled.div`
  width: 40vw;
  position: relative;
  margin-top: 10vw;
  height: 15vh;
  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const Reviewdiv = styled.div`
  width: 30vw;
  padding: 2rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: 100vw;
    height: 60vh;
    overflow: hidden;
    font-size: 0.8rem;
  }
`;

export const ReviewBox = styled.div`
  width: 100%;
  height: 20vw;
  position: relative;
  display: flex;
  color: #4f4f4f;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 2.4rem;
  text-align: justify;
  justify-content: center;
  @media (max-width: 480px) {
    height: 30vh;
    width: 90%;
    font-size: 1rem;
    /* overflow-wrap: break-word; */
  }
`;

export const Remark = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Experience = styled.div`
  width: 100%;
  margin-top: 5vw;
  display: flex;
  justify-content: center;
`;
export const ExperienceHeading = styled.h1`
  font-family: "Sen";
  font-style: normal;
  font-weight: 400;
  font-size: 2.78vw;
  line-height: 4.5rem;
  color: #083740;
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const ReviewText = styled.div`
  width: 80%;
  position: absolute;
  top: 10%;
`;

export const ExperienceSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;

export const Google = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4%;
`;

export const Rating = styled.p`
  font-weight: 900;
  text-align: center;
`;

export const NumReview = styled.p`
  text-align: center;
`;

export const Icon = styled.img`
  width: 100%;
`;
