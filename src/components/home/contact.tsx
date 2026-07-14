"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  number: z.string().min(8, { message: "Please enter a valid mobile number." }),
  subject: z.string().min(3, { message: "Please enter an email subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
  });

  const { errors } = form.formState;

  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSending(true);
    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        toast.success("Transmission successful!", {
          description: "I've received your message and will get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Transmission failed", {
          description: result.error || "A system error occurred. Please try again.",
        });
      }
    } catch {
      toast.error("System Error", {
        description: "Could not establish connection. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/15 dark:bg-primary/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/15 dark:bg-primary/40 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Get in Touch"
          title="Let's"
          titleAccent="Connect"
          description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Form Box (Left) */}
          <div className="lg:col-span-7">
            <Card className="h-full border-border bg-muted/5 premium-shadow">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-black uppercase tracking-tighter">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field data-invalid={!!errors.name}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Full Name</FieldLabel>
                      <Input 
                        placeholder="Mazharul Islam Rafi"
                        {...form.register("name")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.name?.message}
                      </FieldError>
                    </Field>
                    <Field data-invalid={!!errors.email}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Email Address</FieldLabel>
                      <Input 
                        type="email" 
                        placeholder="you@example.com"
                        {...form.register("email")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.email?.message}
                      </FieldError>
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field data-invalid={!!errors.number}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Mobile Number</FieldLabel>
                      <Input 
                        type="tel"
                        placeholder="01700000000"
                        {...form.register("number")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.number?.message}
                      </FieldError>
                    </Field>
                    <Field data-invalid={!!errors.subject}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Email Subject</FieldLabel>
                      <Input 
                        placeholder="Project Inquiry"
                        {...form.register("subject")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.subject?.message}
                      </FieldError>
                    </Field>
                  </div>
                  <Field data-invalid={!!errors.message}>
                    <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Your Message</FieldLabel>
                    <Textarea 
                      placeholder="Tell me about your project or idea"
                      {...form.register("message")}
                      className="h-32 bg-background border-border rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary/30 resize-none text-base font-bold"
                    />
                    <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                      {errors.message?.message}
                    </FieldError>
                  </Field>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-12 text-xs font-bold uppercase tracking-[0.2em]"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Transmission
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details (Right Strip) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* Email Card */}
            <div className="p-5 border border-border bg-muted/10 rounded-xl flex items-center gap-5 hover:border-primary/50 transition-all group premium-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                <a href="mailto:rafimazharul@gmail.com" className="text-sm font-black text-foreground hover:text-primary transition-colors block truncate leading-tight">
                  rafimazharul@gmail.com
                </a>
              </div>
            </div>

            {/* Phone & Location Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-border bg-muted/10 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all group premium-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+8801731512984" className="text-sm font-black text-foreground hover:text-primary transition-colors block leading-tight">
                    +8801731512984
                  </a>
                </div>
              </div>
              <div className="p-5 border border-border bg-muted/10 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all group premium-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Location</p>
                  <p className="text-sm font-black text-foreground leading-tight">Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-5 border border-primary/20 bg-primary/5 rounded-xl flex items-center gap-4">
              <div className="h-2.5 w-2.5 bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse shrink-0" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Status: Open for Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
