import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Message = styled.section`
  background-color: ${s.colors.blue};
  padding: 67px 0;
  @media ${s.device.pc} {
    padding: 81px 0;
  }
`;

export const Title = styled.h2`
  color: ${s.colors.white};
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 1.67;
  text-align: center;

  @media ${s.device.pc} {
    font-size: 36px;
    line-height: 1.33;
  }
`;

export const Description = styled.p`
  color: ${s.colors.white};
  font-size: 14px;
  line-height: 1.86;

  @media ${s.device.pc} {
    max-width: 640px;
    margin: auto;
  }
`;

export const Wrapper = styled.div`
  width: 84%;
  margin: 0 auto;
`;
