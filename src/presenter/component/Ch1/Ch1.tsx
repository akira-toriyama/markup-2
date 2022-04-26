import * as S from "./styles";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Ch1: React.FC = () => (
  <>
    <Header />
    <Hero />
    <S.Message>Message</S.Message>
    <S.Service>Service</S.Service>
    <S.Contact>Contact</S.Contact>
    <S.Footer>Footer</S.Footer>
  </>
);
