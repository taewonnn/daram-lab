import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "DaramLab 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-10">Terms of Service</h1>

        <div className="space-y-8 text-sub leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-primary mb-3">1. 약관의 목적</h2>
            <p>
              본 약관은 DaramLab(이하 &quot;회사&quot;)이 제공하는 서비스 이용에 관한 조건 및
              절차를 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary mb-3">2. 서비스 이용</h2>
            <p>
              사용자는 본 약관에 동의함으로써 회사가 제공하는 서비스를 이용할 수 있습니다.
              서비스는 관련 법령을 준수하는 범위 내에서 이용되어야 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary mb-3">3. 서비스 변경 및 중단</h2>
            <p>
              회사는 서비스의 내용을 변경하거나 중단할 수 있으며, 이 경우 사전에 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary mb-3">4. 면책조항</h2>
            <p>
              회사는 서비스 이용으로 발생한 손해에 대해 관련 법령이 허용하는 범위 내에서
              책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary mb-3">5. 문의</h2>
            <p>
              약관 관련 문의사항은{" "}
              <a href="mailto:support@daramlab.com" className="text-primary underline">
                support@daramlab.com
              </a>
              으로 연락해주세요.
            </p>
          </section>

          <p className="text-sm border-t border-border pt-6">
            최종 수정일: 2026년 6월 29일
          </p>
        </div>
      </div>
    </Section>
  );
}
