import * as React from 'react';
import {Container, Html, Button, Tailwind, Text, Head, Font, Heading, Preview, Body, Hr, Section, Row, Column, Img } from "@react-email/components";

export function WelcomeEmail(props:any) {
  const { url } = props;

  return (
    <Html>
       <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >

      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Preview>welcome to Team Demo</Preview>
      </Head>
      <Body className='text-black'>

      <Container>
        <Heading as='h2' className='text-center'>
         DEMO MAILER
        </Heading>
        <Hr className='h-[2px] bg-gray-300' />
        <Section>

        <Text>
            Thanks for submitting your account information. You're now ready to
            use DEMO!
          </Text>
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
        >
        Click here
      </Button>
          </Section>
          <Section style={footer}>
          <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              <Img className='h-12 w-12'  src='https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png' />
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              <Img className='h-12 w-12' src='https://cdn.pixabay.com/photo/2016/11/18/11/16/facebook-1834007_1280.png' />
            </Column>
          </Row>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2024 DEMO, All Rights Reserved <br />
              350 ,Coimbatore-TN ,INDIA.
            </Text>
          </Row>
        </Section>
      </Container>
          </Body>
    </Tailwind>
        </Html>
  );
}
const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};