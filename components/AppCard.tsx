import Image from "next/image";
import Link from "next/link";
import type { App } from "@/lib/apps";
import Button from "./Button";

type AppCardProps = {
  app: App;
};

export default function AppCard({ app }: AppCardProps) {
  return (
    <div className="border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#f5f5f5] shrink-0">
          {app.icon && (
            <Image src={app.icon} alt={`${app.name} 아이콘`} width={64} height={64} />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-primary">{app.name}</h3>
          <p className="text-sm text-sub mt-1 line-clamp-2">{app.description}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-2">
        <Link
          href={`/apps/${app.slug}`}
          className="text-sm text-sub hover:text-primary transition-colors"
        >
          자세히 보기 →
        </Link>
        {app.playStoreUrl && (
          <Button href={app.playStoreUrl} variant="primary" external className="text-xs px-4 py-2">
            Google Play
          </Button>
        )}
      </div>
    </div>
  );
}
