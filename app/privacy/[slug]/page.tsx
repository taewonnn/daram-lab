import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { apps } from "@/lib/apps";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.privacyPolicySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.privacyPolicySlug === slug);
  if (!app) return {};
  return {
    title: `${app.name} 개인정보처리방침`,
  };
}

export default async function PrivacyDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.privacyPolicySlug === slug);

  if (!app) notFound();

  return (
    <Section>
      <div className="max-w-2xl">
        <div className="mb-8">
          <Link href="/privacy" className="text-sm text-sub hover:text-primary transition-colors">
            ← Privacy Policy
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-primary mb-2">{app.name}</h1>
        <h2 className="text-xl text-sub mb-10">개인정보처리방침</h2>

        <div className="prose prose-neutral max-w-none text-sub leading-relaxed space-y-6">
          <p>
            <strong className="text-primary">{app.name}</strong>은(는) 사용자의 개인정보를 중요시하며,
            개인정보 보호법 및 관련 법령을 준수합니다.
          </p>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">1. 수집하는 개인정보</h3>
            <p>본 앱은 서비스 제공을 위해 필요한 최소한의 정보만 수집합니다.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">2. 개인정보 이용 목적</h3>
            <p>수집된 개인정보는 서비스 제공 및 개선 목적으로만 사용됩니다.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">3. 개인정보 보유 기간</h3>
            <p>서비스 이용 종료 시 즉시 파기하며, 법령에서 정한 기간이 있는 경우 해당 기간 동안 보관합니다.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-2">4. 문의</h3>
            <p>
              개인정보 관련 문의사항은{" "}
              <a href="mailto:support@daramlab.com" className="text-primary underline">
                support@daramlab.com
              </a>
              으로 연락해주세요.
            </p>
          </section>

          <p className="text-sm text-sub border-t border-border pt-6">
            최종 수정일: 2026년 6월 29일
          </p>
        </div>
      </div>
    </Section>
  );
}
