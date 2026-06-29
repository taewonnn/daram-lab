import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "DaramLab 연락처 정보입니다.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-10">Contact</h1>

        <div className="border border-border rounded-2xl divide-y divide-border">
          <div className="px-6 py-5">
            <p className="text-sm text-sub mb-1">Developer</p>
            <p className="font-medium text-primary">DaramLab</p>
          </div>
          <div className="px-6 py-5">
            <p className="text-sm text-sub mb-1">Email</p>
            <a
              href="mailto:support@daramlab.com"
              className="font-medium text-primary hover:underline"
            >
              support@daramlab.kr
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
