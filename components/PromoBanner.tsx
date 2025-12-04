import Image from "next/image";
import Link from "next/link";

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  imagePosition?: "left" | "right";
}

export default function PromoBanner({
  title,
  subtitle,
  image,
  link,
  imagePosition = "left",
}: PromoBannerProps) {
  return (
    <Link
      href={link}
      className="block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div
        className={`flex ${
          imagePosition === "right" ? "flex-row-reverse" : ""
        } items-center bg-linear-to-r from-primary/10 to-primary/5 min-h-[300px]`}
      >
        <div className="flex-1 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h3>
          {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
          <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            Shop Now
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 relative h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Link>
  );
}
