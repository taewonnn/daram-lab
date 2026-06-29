import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <p
            className="text-sm text-sub font-medium mb-4 tracking-widest uppercase animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            DaramLab
          </p>
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight text-primary leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Build simple<br />and useful apps.
          </h1>
          <p
            className="text-sub text-lg mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            DaramLab은 Android 앱과 AI 서비스를 개발하는<br className="hidden md:block" />
            1인 개발 스튜디오입니다.
          </p>
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button href="/apps">Apps 보기</Button>
            <Button href="/contact" variant="secondary">문의하기</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
