import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Hammer, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

const perks=[
  {
    name: "Selection of Handcrafted Anime Treasures",
    Icon: Hammer,
    description : "Discover Takumi's Marketplace, a curated selection of handcrafted anime treasures meticulously crafted by skilled artisans"
  },
  {
    name: "Support Talented Craftspeople",
    Icon: Heart,
    description : "Empower talented craftspeople and own a piece of the anime world's legacy with Takumi's limited-edition pieces."
  },
  {
    name: "Secure and Reliable Transaction Platform",
    Icon: ShieldCheck,
    description : "Shop with confidence knowing that Takumi's Marketplace prioritizes your security and satisfaction. "
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
            Your marketplace for forged {' '}
            <span className="text-pink-600">
              anime items
            </span>
            .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Takumi workshop. Every items are 
            verified by our team to ensure our highest 
            quality standards.  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        {/*TO DO LIST PRODUCTS*/}
      </MaxWidthWrapper>  

      <section className="border-t border-gay-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk)=> (
              <div key={perk.name} className="text-center md:items-start md:text-left lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-900">
                    {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>

                <div className="mt-6 md:mt-0 lg:mt-6 md:ml-4 lg:ml-0 ">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-forground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
