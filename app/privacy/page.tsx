import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DaramLab 앱별 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Privacy Policy</h1>
        <p className="text-sub mb-10">앱별 개인정보처리방침을 확인하세요.</p>

        {apps.length === 0 ? (
          <p className="text-sub">등록된 앱이 없습니다.</p>
        ) : (
          <ul className="space-y-3">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/privacy/${app.privacyPolicySlug}`}
                  className="flex items-center justify-between border border-border rounded-xl px-5 py-4 hover:border-primary transition-colors group"
                >
                  <span className="font-medium text-primary">{app.name}</span>
                  <span className="text-sub group-hover:text-primary transition-colors">→</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
