import styled from "styled-components";
import { AppContentWrapper, Button, Header, Heading, Input } from "..";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Footer = () => {
  const [inputField, setInputField] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(() => true);

    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setInputField({ from_name: "", email: "", message: "" });
          setIsLoading(() => false);
          alert("Email sent successfully!");
        },
        () => {
          setIsLoading(() => false);
          alert("There was an error sending the email");
        },
      );
  };
  return (
    <>
      <FooterWrapper id="contact" onSubmit={sendEmail}>
        <AppContentWrapper>
          <Info>
            <Heading>Contact</Heading>
            <Paragraph>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
              <br />
              <br />
              Or, alternatively, contact me via:
              <br />
              Email: bogdankim@tutamail.com
              <br />
              Telegram: @bogkim
            </Paragraph>
          </Info>

          <Form>
            <Input
              name="from_name"
              value={inputField.from_name}
              onChange={onInputChange}
              type="text"
              placeholder="Name"
            />
            <Input
              name="email"
              value={inputField.email}
              onChange={onInputChange}
              type="email"
              placeholder="Email"
            />
            <Input
              name="message"
              as={"textarea"}
              rows={4}
              placeholder="Your message"
              value={inputField.message}
              onChange={onInputChange}
            ></Input>
            <Button
              as={"button"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                maxWidth: "fit-content",
              }}
            >
              Send Message {isLoading && <ImSpinner2 />}
            </Button>
          </Form>
        </AppContentWrapper>
        <Header navLabel="footer nav" header={false} />
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.section};
  border-top: 1px solid ${(props) => props.theme.sectionBorder};
  padding-block: 2rem;

  @media only screen and (min-width: 48em) {
    & > div:first-child {
      display: grid;
      grid-template-columns: repeat(2, min(50%, 28.125rem));
      justify-content: space-between;
    }
  }
`;

const Info = styled.div``;

const Paragraph = styled.p`
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 4rem;

  & > button {
    display: block;
    max-width: fit-content;
    margin-left: auto;

    & > svg {
      animation: spin 2s linear infinite;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
