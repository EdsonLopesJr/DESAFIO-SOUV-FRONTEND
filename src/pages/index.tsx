import { Header } from "@/components/Header";
import { Presentation } from "@/components/Presentation";
import { About } from "@/components/About";
import { Service } from "@/components/Service";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { styled } from "styled-components";

const Container = styled.div`
  & > *:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }

  & > *:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Presentation />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </Container>
  );
}
