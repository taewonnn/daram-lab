import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <p className="text-8xl font-bold text-border mb-6">404</p>
        <h1 className="text-2xl font-semibold text-primary mb-3">페이지를 찾을 수 없습니다</h1>
        <p className="text-sub mb-10">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          ← 홈으로 돌아가기
        </Link>
      </div>
    </Section>
  );
}
