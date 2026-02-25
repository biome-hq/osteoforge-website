import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="font-heading font-bold text-2xl tracking-tight text-background"
            >
              OsteoForge
            </Link>
            <p className="mt-3 text-sm text-background/50 leading-relaxed max-w-xs">
              Next-generation bioresorbable bone regeneration technology.
              <br />
              Designed in India, for the world.
            </p>
            <p className="mt-8 text-xs text-background/30">
              &copy; {new Date().getFullYear()} OsteoForge Medical Technologies.
              All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-background/40 mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    Technology & Products
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-background/40 mb-5">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <p className="text-sm text-background/60 leading-relaxed">
                    Mon–Fri, 9am–6pm IST
                  </p>
                </li>
                <li>
                  <p className="text-sm text-background/60 hover:text-background transition-colors duration-300">
                    Hyderabad, India
                  </p>
                </li>
                <li>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none px-10 py-6 text-sm tracking-[0.12em] shrink-0 bg-background/70 text-foreground hover:bg-background/90"
                  >
                    <a href="mailto:info@osteoforge.in">
                      Contact Us
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
