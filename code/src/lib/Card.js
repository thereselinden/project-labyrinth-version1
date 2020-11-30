import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0.12);
  background: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 3px 3px 0 0;
`;

const Content = styled.div`
  padding: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const SubTitle = styled.p`
  margin: 0;
  color: #6b6b6b;
`;





const Card = ({ title, subTitle, coverImage, className }) => {
  return (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          <div>
            {title && <Title>{title} </Title>}
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </div>
        </TitleBar>
      </Content>
    </Container>
  );
};
export default Card;
