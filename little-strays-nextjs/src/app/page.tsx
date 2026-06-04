import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[clamp(620px,150vw,760px)] overflow-hidden bg-[#f8f2ec] lg:h-[calc(100vh-5rem)] lg:min-h-0">
        <div className="absolute inset-0">
          <img
            src="/images/homepage_picture2.png"
            alt="A dog and cat resting together at home"
            width="1822"
            height="863"
            className="absolute left-1/2 top-0 h-auto w-[105%] max-w-none -translate-x-[78%] sm:-top-2 sm:w-[96%] sm:-translate-x-[78%] lg:inset-0 lg:h-full lg:w-full lg:max-w-full lg:translate-x-0 lg:object-cover lg:object-center"
          />
        </div>
        <div className="relative z-10 flex min-h-[clamp(620px,150vw,760px)] items-start px-4 pb-8 pt-64 sm:px-8 sm:pb-10 sm:pt-[20rem] md:pt-[24rem] lg:h-full lg:min-h-0 lg:items-center lg:px-32 lg:py-10">
          <div className="max-w-xl lg:max-w-[760px]">
            <h1 className="whitespace-nowrap text-[clamp(1.05rem,4.4vw,2.75rem)] font-semibold leading-tight text-ink">
              Because loving them well is the whole point.
            </h1>
            <p className="mt-4 max-w-xl text-justify text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7 lg:mt-7 lg:max-w-[760px] lg:text-lg lg:leading-8">
              Little Strays is a curated shop for dogs and cats, and the people
              who think about them a little too much. We pick things the way you
              would if you had all the time in the world — for how it feels
              against fur, for what’s actually inside, and for the quiet rhythm
              of everyday life. Style just happens to come with it.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/products">Shop the edit</ButtonLink>
              <ButtonLink href="/about" variant="light">
                Our story
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
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 lg:gap-6">
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
