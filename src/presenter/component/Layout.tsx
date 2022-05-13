import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Base = styled.div`
  width: 84%;
  margin: 0 auto;

  @media ${s.device.pc} {
    width: 91%;
    max-width: 1240px;
  }
`;
