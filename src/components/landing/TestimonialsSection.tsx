import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "רונן כהן",
    role: "מנהל פיתוח עסקי",
    text: "המנטורינג עם מתן שינה לי את הגישה לעבודה. למדתי לחשוב אחרת ולהשתמש בכלים שחוסכים לי שעות כל יום.",
  },
  {
    name: "סיון לוי",
    role: "מנהלת חברת הנדסה",
    text: "ההרצאה הייתה פרקטית ומיידית. הצוות שלי התחיל ליישם כבר באותו שבוע.",
  },
  {
    name: "מיכאל ברק",
    role: "שותף בחברת אדריכלים",
    text: "הליווי בהטמעת AI היה מדויק ומקצועי. היום אנחנו עובדים מהר יותר ובאיכות גבוהה יותר.",
  },
  {
    name: "יובל שמש",
    role: "מנהל חברת ייעוץ כלכלי",
    text: "הרצאה מעשירה שפתחה לנו עולם חדש. הצוות לא מפסיק לדבר על זה.",
  },
  {
    name: "עידו נחמיאס",
    role: "יזם",
    text: "מתן בנה לי אפליקציה שהגשימה חלום של שנים. מקצוען אמיתי שמבין את הצרכים.",
  },
  {
    name: "דנית אברהם",
    role: "בעלת עסק",
    text: "הליווי בהכנסת כלים חכמים שיפר את היעילות שלנו ב-40%. השקעה שהחזירה את עצמה תוך חודש.",
  },
];

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isRTL ? "מה אומרים עליי" : "What People Say"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isRTL
                ? "לקוחות ושותפים משתפים את החוויה שלהם"
                : "Clients and partners share their experience"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                direction: isRTL ? "rtl" : "ltr",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full bg-card border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="w-8 h-8 text-primary/40 mb-4" />
                        <p className="text-foreground/90 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t border-border/50 pt-4">
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
