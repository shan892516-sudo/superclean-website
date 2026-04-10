import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    zip: "",
    sqft: "",
    service: "regular",
    name: "",
    email: "",
    phone: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const canNext =
    (step === 1 && form.zip.length >= 5 && form.sqft) ||
    (step === 2 && form.service) ||
    (step === 3 && form.name && form.email && form.phone);

  return (
    <section id="booking" className="section-padding bg-muted">
      <div className="container-narrow max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Get a Free Quote
          </h2>
          <p className="text-muted-foreground">
            Three quick steps to your custom cleaning estimate.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-border text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="h-4 w-4" /> : s}
              </div>
              {s < 4 && <div className={`w-8 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg border border-border p-6 sm:p-8 shadow-card">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div>
                  <Label htmlFor="zip" className="text-foreground font-medium">Zip Code</Label>
                  <Input id="zip" placeholder="11001" value={form.zip} onChange={(e) => update("zip", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="sqft" className="text-foreground font-medium">House Size (sq ft)</Label>
                  <Input id="sqft" placeholder="1,500" value={form.sqft} onChange={(e) => update("sqft", e.target.value)} className="mt-1.5" />
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <Label className="text-foreground font-medium mb-4 block">Type of Service</Label>
                <RadioGroup value={form.service} onValueChange={(v) => update("service", v)} className="space-y-3">
                  {[
                    { value: "regular", label: "Regular Cleaning", desc: "Routine upkeep for a tidy home" },
                    { value: "deep", label: "Deep Cleaning", desc: "Thorough top-to-bottom clean" },
                    { value: "moveinout", label: "Move-In / Move-Out", desc: "Complete turnover cleaning" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        form.service === opt.value ? "border-primary bg-accent" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <RadioGroupItem value={opt.value} className="mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{opt.label}</p>
                        <p className="text-xs text-muted-foreground">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                  <Input id="name" placeholder="Jane Smith" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="jane@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(929) 261-0266" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1.5" />
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">You're All Set!</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Based on your details, we'd love to give you an exact quote. Click below to book directly.
                </p>
                <a
                  href="https://www.housecallpro.com/book/SuperClean-Home-Services-Inc/bbf5e28a48cf4f82aeb5b1de9b1b1457"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8">
                    See Pricing & Book
                  </Button>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 4 && (
            <div className="flex justify-between mt-8">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 1}
                className="text-muted-foreground gap-1"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1"
              >
                {step === 3 ? "See Pricing" : "Next"} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
