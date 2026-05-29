/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="he" dir="rtl">
    <Head />
    <Preview>אישור כתובת המייל שלך ב-GenAI-R</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>אישור כתובת המייל שלך</Heading>
        <Text style={text}>
          תודה שנרשמת ל-{' '}
          <Link href={siteUrl} style={link}>
            <strong>GenAI-R</strong>
          </Link>
          !
        </Text>
        <Text style={text}>
          אנא אשרו את כתובת המייל שלכם (
          <Link href={`mailto:${recipient}`} style={link}>
            {recipient}
          </Link>
          ) על ידי לחיצה על הכפתור:
        </Text>
        <Button style={button} href={confirmationUrl}>
          אישור המייל
        </Button>
        <Text style={footer}>
          אם לא נרשמתם, אפשר להתעלם מהמייל הזה.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
}
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#0d1117',
  margin: '0 0 20px',
}
const text = {
  fontSize: '15px',
  color: '#4a5568',
  lineHeight: '1.6',
  margin: '0 0 25px',
}
const link = { color: 'inherit', textDecoration: 'underline' }
const button = {
  backgroundColor: 'hsl(185, 80%, 45%)',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold' as const,
  borderRadius: '12px',
  padding: '14px 28px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
