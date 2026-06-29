import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { apps } from "@/lib/apps";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.description,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);

  if (!app) notFound();

  return (
    <Section>
      <div className="mb-8">
        <Link href="/apps" className="text-sm text-sub hover:text-primary transition-colors">
          ← Apps
        </Link>
      </div>

      <div className="flex items-center gap-6 mb-10">
        {app.icon && (
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#f5f5f5] flex-shrink-0">
            <Image src={app.icon} alt={`${app.name} 아이콘`} width={80} height={80} />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-semibold text-primary">{app.name}</h1>
          <p className="text-sub mt-1">{app.description}</p>
        </div>
      </div>

      {app.screenshots.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-primary mb-4">스크린샷</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {app.screenshots.map((src, i) => (
              <div key={i} className="flex-shrink-0 rounded-xl overflow-hidden border border-border">
                <Image src={src} alt={`스크린샷 ${i + 1}`} width={200} height={400} />
              </div>
            ))}
          </div>
        </div>
      )}

      {app.features.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-primary mb-4">주요 기능</h2>
          <ul className="space-y-3">
            {app.features.map((feature, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-sub mt-0.5">•</span>
                <div>
                  <p className="font-medium text-primary">{feature.title}</p>
                  {feature.description && (
                    <p className="text-sm text-sub mt-0.5">{feature.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        {app.playStoreUrl && (
          <Button href={app.playStoreUrl} external>
            Google Play에서 다운로드
          </Button>
        )}
        <Button href={`/privacy/${app.privacyPolicySlug}`} variant="secondary">
          개인정보처리방침
        </Button>
      </div>
    </Section>
  );
}
