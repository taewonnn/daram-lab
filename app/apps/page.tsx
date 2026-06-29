import type { Metadata } from "next";
import Section from "@/components/Section";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "DaramLab이 개발한 Android 앱 목록입니다.",
};

export default function AppsPage() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Apps</h1>
      <p className="text-sub mb-12">DaramLab이 개발한 앱들을 소개합니다.</p>

      {apps.length === 0 ? (
        <div className="border border-border rounded-2xl p-16 text-center">
          <p className="text-2xl font-semibold text-primary mb-2">Coming Soon</p>
          <p className="text-sub">새로운 앱을 준비 중입니다.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      )}
    </Section>
  );
}
