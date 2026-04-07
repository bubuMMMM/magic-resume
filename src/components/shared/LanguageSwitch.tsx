import { useLocale } from "@/i18n/compat/client";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { locales, localeNames } from "@/i18n/config";
import { getLocaleFromPathname, replacePathLocale } from "@/i18n/runtime";

export default function LanguageSwitch() {
  const locale = useLocale();
  const navigate = useNavigate();
  const pathname = useLocation({
    select: (location) => location.pathname
  });

  const handleSwitchLocale = (nextLocale: (typeof locales)[number]) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;

    const currentPathLocale = getLocaleFromPathname(pathname);
    if (currentPathLocale) {
      navigate({ to: replacePathLocale(pathname, nextLocale) });
    }
  };

  // Only one locale (fr) — language switcher is not needed
  return null;
}
