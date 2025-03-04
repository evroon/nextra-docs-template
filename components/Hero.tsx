import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
import { IconLibrary, IconRocket } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-linear-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-linear-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="#"
            className={`w-full md:w-1/3 h-12 ${buttonVariants({
              variant: "default",
            })}`}
          >
            <IconRocket
              size="32px"
              style={{ marginRight: "0.5rem", height: "32px" }}
            />
            Launch Demo
          </Link>

          <Link
            href="/docs"
            className={`w-full md:w-1/3 h-12 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <IconLibrary
              size="24px"
              style={{ marginRight: "0.5rem", height: "32px" }}
            />
            Read the docs
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow-sm"></div>
    </section>
  );
};
