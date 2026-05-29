import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const LOGO_URL =
  'https://dunwknivugbgyhjrjdru.supabase.co/storage/v1/object/public/email-assets/logo.png'

interface ContactConfirmationProps {
  name?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, message }: ContactConfirmationProps) => (
  <Html lang="he" dir="rtl">
    <Head />
    <Preview>תודה שפנית אליי — קיבלתי את ההודעה שלך</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img src={LOGO_URL} alt="GenAI-R" width="120" style={logo} />
        </Section>

        <Heading style={h1}>
          {name ? `שלום ${name},` : 'שלום,'}
        </Heading>

        <Text style={text}>
          תודה רבה שפנית אליי דרך האתר. קיבלתי את הפנייה שלך ואחזור אליך בהקדם
          האפשרי, בדרך כלל תוך 24 שעות.
        </Text>

        {message ? (
          <Section style={quoteBox}>
            <Text style={quoteLabel}>ההודעה שלך:</Text>
            <Text style={quoteText}>{message}</Text>
          </Section>
        ) : null}

        <Text style={text}>
          בינתיים, אם יש משהו דחוף, אפשר ליצור איתי קשר ישירות בטלפון או בוואטסאפ.
        </Text>

        <Hr style={divider} />

        <Section style={signature}>
          <Text style={sigName}>Matan Retzer</Text>
          <Text style={sigTitle}>GenAI-R Consulting & Services</Text>
          <Text style={sigLine}>📞 <Link href="tel:+972524538121" style={sigLink}>0524-538-121</Link></Text>
          <Text style={sigLine}>✉️ <Link href="mailto:matan.retzer@genai-r.com" style={sigLink}>matan.retzer@genai-r.com</Link></Text>
          <Text style={sigLine}>
            🌐 <Link href="https://genai-r.com" style={sigLink}>My Site</Link>
            {'  |  '}
            <Link href="https://www.linkedin.com/in/matanretzer/" style={sigLink}>LinkedIn</Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'תודה על פנייתך - GenAI-R',
  displayName: 'Contact form confirmation',
  previewData: { name: 'דני', message: 'אשמח לשמוע על פתרונות AI לעסק שלי.' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
}
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const logoSection = { textAlign: 'center' as const, marginBottom: '24px' }
const logo = { margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0d1117', margin: '0 0 16px' }
const text = { fontSize: '15px', color: '#4a5568', lineHeight: '1.6', margin: '0 0 16px' }
const quoteBox = {
  background: '#f6f8fa',
  borderInlineStart: '4px solid hsl(185, 80%, 45%)',
  borderRadius: '8px',
  padding: '14px 18px',
  margin: '20px 0',
}
const quoteLabel = { fontSize: '12px', color: '#6b7280', margin: '0 0 6px', fontWeight: 'bold' as const }
const quoteText = { fontSize: '14px', color: '#1f2937', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' as const }
const divider = { borderColor: '#e5e7eb', margin: '28px 0 20px' }
const signature = { textAlign: 'start' as const }
const sigName = { fontSize: '16px', fontWeight: 'bold' as const, color: '#0d1117', margin: '0 0 4px' }
const sigTitle = { fontSize: '14px', color: 'hsl(185, 80%, 35%)', margin: '0 0 10px', fontWeight: 'bold' as const }
const sigLine = { fontSize: '13px', color: '#4a5568', margin: '2px 0', lineHeight: '1.6' }
const sigLink = { color: 'hsl(185, 80%, 35%)', textDecoration: 'none' }