import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "DaramLab은 사용자의 일상을 조금 더 편하게 만드는 모바일 앱과 AI 서비스를 개발합니다.",
};

const values = [
  { keyword: "Simple", description: "복잡함을 줄이고 핵심에 집중합니다." },
  { keyword: "Clean", description: "깔끔하고 직관적인 사용자 경험을 추구합니다." },
  { keyword: "Useful", description: "실생활에서 진짜 도움이 되는 앱을 만듭니다." },
];

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6">About</h1>
        <p className="text-sub text-lg leading-relaxed mb-16">
          DaramLab은 사용자의 일상을 조금 더 편하게 만드는<br />
          모바일 앱과 AI 서비스를 개발합니다.
        </p>

        <div className="grid gap-8">
          {values.map((v) => (
            <div key={v.keyword} className="border-l-2 border-primary pl-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{v.keyword}</h2>
              <p className="text-sub">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
