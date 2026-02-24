import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Top bar */}
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <Link
                to="/"
                className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-background"
              >
                OsteoForge
              </Link>
              <p className="mt-3 text-sm text-background/50 leading-relaxed max-w-xs">
                Next-generation bioresorbable bone regeneration technology.
                Designed in India, for the world.
              </p>
            </div>

            {/* Newsletter in footer */}
            <div className="max-w-sm w-full">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/40 mb-3">
                Stay Updated
              </p>
              <form className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 h-12 px-4 text-sm bg-background/5 border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-background/40 transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-5 text-sm font-medium bg-background text-foreground hover:bg-background/90 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Products */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/products?collection=${collection.slug}`}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
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
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/psi-workflow"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  PSI Workflow
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Clinical Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Regulatory Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Instructions for Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@osteoforge.in"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  info@osteoforge.in
                </a>
              </li>
              <li>
                <p className="text-sm text-background/40 leading-relaxed">
                  Mon–Fri, 9am–6pm IST
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} OsteoForge Medical Technologies. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
