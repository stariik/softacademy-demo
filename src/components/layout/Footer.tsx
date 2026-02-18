"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/layout/Logo";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const navigation = {
    main: [
      { name: "მთავარი", href: "/" },
      { name: "კურსი", href: "/#course" },
      { name: "ბლოგი", href: "/blog" },
      { name: "კონტაქტი", href: "/contact" },
    ],
    support: [
      { name: "დახმარება", href: "/help" },
      { name: "კონფიდენციალურობა", href: "/privacy" },
      { name: "მომსახურების პირობები", href: "/terms" },
    ],
    social: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "YouTube", href: "#", icon: Youtube },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative bg-slate-900">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Newsletter section */}
      <div className="border-b border-slate-800">
        <div className="container-custom py-12 lg:py-16">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl",
              "bg-gradient-to-br from-blue-600 to-blue-700",
              "p-8 lg:p-12",
            )}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Shield className="w-6 h-6 text-white/80" />
                  <span className="text-white/80 text-sm font-medium">
                    იყავი განახლებული
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  გამოიწერე სიახლეები
                </h3>
                <p className="text-blue-100 max-w-md">
                  მიიღე უახლესი ინფორმაცია კიბერუსაფრთხოების კურსებსა და
                  სპეციალურ შეთავაზებებზე
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="შეიყვანე ელ-ფოსტა"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="sm:w-72 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50 border-0"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    გამოწერა
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="mb-6">
              <Logo variant="dark" size="md" />
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              პროფესიონალური კიბერუსაფრთხოების სასწავლო პლატფორმა. ისწავლე
              ეთიკური ჰაკინგი, ქსელის უსაფრთხოება და ინციდენტებზე რეაგირება
              ინდუსტრიის ექსპერტებისგან.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@softacademy.ge"
                className={cn(
                  "flex items-center gap-3 text-slate-400",
                  "hover:text-blue-400 transition-colors duration-200",
                  "group",
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center",
                    "bg-slate-800 group-hover:bg-blue-500/10",
                    "transition-colors duration-200",
                  )}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@softacademy.ge</span>
              </a>
              <a
                href="tel:+995555123456"
                className={cn(
                  "flex items-center gap-3 text-slate-400",
                  "hover:text-blue-400 transition-colors duration-200",
                  "group",
                )}
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center",
                    "bg-slate-800 group-hover:bg-blue-500/10",
                    "transition-colors duration-200",
                  )}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <span>+995 598 233 362</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>თბილისი, საქართველო</span>
              </div>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-semibold text-white mb-4">ნავიგაცია</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-slate-400 hover:text-blue-400",
                      "transition-colors duration-200",
                      "inline-flex items-center gap-1 group",
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mb-4 mt-8">მხარდაჭერა</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-slate-400 hover:text-blue-400",
                      "transition-colors duration-200",
                      "inline-flex items-center gap-1 group",
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h3 className="font-semibold text-white mb-4">გამოგვყევი</h3>
            <div className="flex flex-wrap gap-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    "bg-slate-800 text-slate-400",
                    "hover:bg-blue-500 hover:text-white",
                    "transition-all duration-200",
                    "hover:scale-110",
                  )}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Security Badge */}
            <div className="mt-8 p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-white font-medium text-sm">
                    უსაფრთხო პლატფორმა
                  </p>
                  <p className="text-slate-500 text-xs">SSL დაშიფრული</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SoftAcademy. ყველა უფლება
              დაცულია.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              შექმნილია <span className="text-blue-400">უსაფრთხოების</span>{" "}
              გათვალისწინებით
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
