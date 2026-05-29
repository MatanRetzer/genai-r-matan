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

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({
  siteName,
  siteUrl,
  confirmationUrl,
}: InviteEmailProps) => (
  <Html lang="he" dir="rtl">
    <Head />
    <Preview>הוזמנת להצטרף ל-GenAI-R</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>הוזמנת להצטרף</Heading>
        <Text style={text}>
          הוזמנת להצטרף ל-{' '}
          <Link href={siteUrl} style={link}>
            <strong>GenAI-R</strong>
          </Link>
          . לחצו על הכפתור לאישור ההזמנה ויצירת חשבון.
        </Text>
        <Button style={button} href={confirmationUrl}>
          אישור ההזמנה
        </Button>
        <Text style={footer}>
          אם לא ציפיתם להזמנה, אפשר להתעלם מהמייל.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

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
