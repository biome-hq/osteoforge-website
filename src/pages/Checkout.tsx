import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { items, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    department: "",
    title: "",
    country: "",
    applicationArea: "",
    patientVolume: "",
    notes: "",
  });

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-narrow py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl mb-4">No Items to Inquire About</h1>
            <p className="text-muted-foreground mb-8">
              Your inquiry list is empty.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
            >
              <Link to="/products">
                Browse Products
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Submitted",
      description:
        "Thank you! Our clinical team will contact you within 48 hours.",
    });

    clearCart();
    setIsSubmitting(false);
    navigate("/");
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container-full py-6 border-b border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Link to="/cart" className="hover:text-foreground transition-colors">
            Your Inquiry
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">Submit Inquiry</span>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container-full py-4">
          <div className="flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground">
              Our team will review your inquiry and provide detailed pricing and availability information within 48 hours.
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="container-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl mb-12"
          >
            Submit Product Inquiry
          </motion.h1>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="font-serif text-xl mb-6">
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="rounded-none h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="rounded-none h-12"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="rounded-none h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-none h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Professional Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="institution"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Institution / Hospital *
                      </label>
                      <Input
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        required
                        className="rounded-none h-12"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="department"
                          className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                        >
                          Department
                        </label>
                        <Input
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="rounded-none h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                        >
                          Title / Role
                        </label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="rounded-none h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Country *
                      </label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="rounded-none h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Clinical Details */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Clinical Details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="applicationArea"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Application Area
                      </label>
                      <Input
                        id="applicationArea"
                        name="applicationArea"
                        value={formData.applicationArea}
                        onChange={handleInputChange}
                        placeholder="e.g., Craniofacial, Dental, Orthopedic"
                        className="rounded-none h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="patientVolume"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2"
                      >
                        Estimated Patient Volume
                      </label>
                      <Input
                        id="patientVolume"
                        name="patientVolume"
                        value={formData.patientVolume}
                        onChange={handleInputChange}
                        placeholder="e.g., 1-5/month, 5-20/month"
                        className="rounded-none h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Additional Information</h2>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Please describe your clinical needs, specific requirements, or any questions..."
                    className="rounded-none min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-none py-6 text-sm tracking-[0.15em] uppercase btn-premium"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Inquiry Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-bone p-8 lg:sticky lg:top-28">
                <h2 className="font-serif text-2xl mb-6">Inquiry Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-16 h-20 bg-muted/30 overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="mailto:info@osteoforge.in"
                      className="text-foreground underline"
                    >
                      info@osteoforge.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
