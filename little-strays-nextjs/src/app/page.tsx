import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col overflow-hidden bg-[#f8f2e9] lg:block lg:h-[calc(100vh-5rem)]">
        <div className="relative h-[clamp(210px,46vw,400px)] lg:absolute lg:inset-0 lg:h-auto">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center gap-[clamp(0.5rem,5vw,3rem)] px-3 sm:px-8 lg:hidden"
          >
            <div className="relative h-full w-[min(46vw,19rem)] overflow-hidden">
              <img
                src="/images/homepage_picture3.png"
                alt=""
                width="1822"
                height="863"
                className="absolute bottom-[10%] left-0 h-[150%] w-auto max-w-none object-contain sm:bottom-[8%] sm:h-[145%] md:bottom-[6%] md:h-[140%]"
              />
            </div>
            <div className="relative h-full w-[min(46vw,19rem)] overflow-hidden">
              <img
                src="/images/homepage_picture3.png"
                alt=""
                width="1822"
                height="863"
                className="absolute bottom-[10%] right-0 h-[150%] w-auto max-w-none object-contain sm:bottom-[8%] sm:h-[145%] md:bottom-[6%] md:h-[140%]"
              />
            </div>
          </div>
          <img
            src="/images/homepage_picture3.png"
            alt="A dog and cat resting together at home"
            width="1822"
            height="863"
            className="hidden lg:absolute lg:inset-0 lg:block lg:h-full lg:w-full lg:max-w-none lg:object-contain lg:object-center"
          />
        </div>
        <div className="relative z-10 flex justify-center px-4 pb-12 pt-2 text-center sm:px-8 sm:pb-14 lg:h-full lg:items-center lg:px-12 lg:py-10 xl:px-16 2xl:px-32">
          <div className="mx-auto w-full max-w-[92vw] lg:-translate-y-20 xl:-translate-y-24">
            <h1 className="text-[clamp(1.55rem,6.8vw,2.75rem)] font-semibold leading-tight text-ink md:whitespace-nowrap lg:text-[clamp(1rem,4.4vw,2.75rem)]">
              Because loving them well is the whole point.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8 md:max-w-none md:whitespace-nowrap lg:mt-7 lg:text-xl">
              A curated shop for dogs, cats, and the{" "}
              <br className="md:hidden" />
              people who love them a little too much.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/products">Shop the edit</ButtonLink>
              <ButtonLink href="/about" variant="light">
                Our story
              </ButtonLink>
              <ButtonLink href="/meet-the-team" variant="light">
                Meet the Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1720px] px-4 py-12 sm:px-6 lg:px-6 lg:py-20 xl:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl sm:leading-none">
              Our favorites
            </h2>
          </div>
          <Link
            href="/products"
            className="focus-ring rounded-sm text-sm font-semibold text-clay hover:text-ink"
          >
            View all products
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              minimal
              squareImage
            />
          ))}
        </div>
      </section>
    </>
  );
}
