import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { LOCALE_COOKIE, resolveLocale } from "@/i18n/locale-cookie";

export default async function RootPage() {
  const cookieStore = await cookies();
  const headersList = await headers();
  const locale = resolveLocale(
    cookieStore.get(LOCALE_COOKIE)?.value,
    headersList.get("accept-language")
  );
  redirect(`/${locale}`);
}
