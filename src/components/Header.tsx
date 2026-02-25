import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname: _pathname } = useLocation();

  const transparent = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    // Run once on mount to handle page loads that aren't at the top
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = cn(
    "text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 link-underline",
    transparent
      ? "text-white/80 hover:text-white"
      : "text-muted-foreground hover:text-foreground"
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-heading font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-500",
              transparent
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary"
            )}
          >
            OsteoForge
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className={navLinkClass}>
              Products
            </Link>
            <Link to="/technology" className={navLinkClass}>
              Technology
            </Link>
            <Link to="/about" className={navLinkClass}>
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              transparent ? "text-white" : "hover:bg-accent"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="md:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="py-8 space-y-1">
                {[
                  { to: "/products", label: "Products" },
                  { to: "/technology", label: "Technology" },
                  { to: "/about", label: "About" },
                ].map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="block px-2 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
