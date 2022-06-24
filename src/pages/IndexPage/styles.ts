import styled from "@emotion/styled/macro";

export const Container = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #d34f49;
`;

export const Description = styled.small`
  display: block;
  margin: 16px 0 0 0;
  padding: 0;
  color: #6b7280;
`;

export const ImageWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.4;
  width: 288px;
  height: 288px;
  transform: translate(96px, -96px);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
