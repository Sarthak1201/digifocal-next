"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Software Solutions", href: "/services/software-solutions", description: "Web apps, Mobile apps, Custom platforms" },
  { title: "Automation Services", href: "/services/automation", description: "RPA, Workflow automation, AI-driven automation" },
  { title: "Management Consulting", href: "/services/consulting", description: "Digital transformation, Architecture, Strategy" },
  { title: "Talent Solutions", href: "/services/talent", description: "Recruitment & HR consulting" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const location = { pathname, search: "", hash: "" };

  const isActive = (path: string) => location.pathname === path;

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="w-full px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/#hero" className="flex items-center" onClick={handleLinkClick}>
            <motion.img
              src="/DigifocalLogo.jpg"
              alt="Digifocal Logo"
              className="h-10 lg:h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>

                <NavigationMenuItem>
                  <Link href="/#hero">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                        isActive("/") ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                        isActive("/about") ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Careers Desktop Link */}
                <NavigationMenuItem>
                  <Link href="/careers">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                        isActive("/careers") ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base bg-transparent text-muted-foreground hover:text-primary data-[state=open]:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-card border border-border">
                      {services.map((service, index) => (
                        <motion.li
                          key={service.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 p-3 transition-colors hover:bg-secondary rounded-sm"
                            >
                              <div className="text-sm font-medium text-foreground">
                                {service.title}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1.5">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* ADDED: Blogs Desktop Link */}
                <NavigationMenuItem>
                  <Link href="/blogs">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                        isActive("/blogs") ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                        isActive("/contact") ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
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
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </nav>
      </div>

      {/* --------------------------------------------------
        Mobile Menu Dropdown
        --------------------------------------------------
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 shadow-lg">
              <Link
                href="/#hero"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/") ? "text-primary" : "text-foreground"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/about") ? "text-primary" : "text-foreground"
                )}
              >
                About
              </Link>

              {/* Careers Mobile Link */}
              <Link
                href="/careers"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/careers") ? "text-primary" : "text-foreground"
                )}
              >
                Careers
              </Link>
              
              {/* Mobile Services Section */}
              <div className="py-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Services
                </p>
                <div className="flex flex-col space-y-3 pl-2 border-l-2 border-border/50">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={handleLinkClick}
                      className="text-base text-foreground/80 hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ADDED: Blogs Mobile Link */}
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/blogs") ? "text-primary" : "text-foreground"
                )}
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/contact") ? "text-primary" : "text-foreground"
                )}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}