import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-sub font-medium mb-4 tracking-widest uppercase">DaramLab</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-primary leading-tight mb-6">
            Build simple<br />and useful apps.
          </h1>
          <p className="text-sub text-lg mb-10 leading-relaxed">
            DaramLab은 Android 앱과 AI 서비스를 개발하는<br className="hidden md:block" />
            1인 개발 스튜디오입니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/apps">Apps 보기</Button>
            <Button href="/contact" variant="secondary">문의하기</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
