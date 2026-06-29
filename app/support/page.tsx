import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Support",
  description: "DaramLab 고객지원 페이지입니다.",
};

export default function SupportPage() {
  return (
    <Section>
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Support</h1>
        <p className="text-sub text-lg mb-12">문의사항이 있으시면 아래 이메일로 연락해주세요.</p>

        <a
          href="mailto:support@daramlab.kr"
          className="flex items-center justify-between border border-border rounded-2xl px-6 py-5 hover:border-primary transition-colors group"
        >
          <div>
            <p className="text-sm text-sub mb-1">이메일</p>
            <p className="font-medium text-primary">support@daramlab.kr</p>
          </div>
          <span className="text-sub group-hover:text-primary transition-colors text-xl">→</span>
        </a>

        <p className="text-sm text-sub mt-6">
          최대한 빠르게 답변 드리겠습니다.
        </p>
      </div>
    </Section>
  );
}
