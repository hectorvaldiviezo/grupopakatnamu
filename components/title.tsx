"use client";
import { AnimatedElement } from "./animated-element";
import { AuroraText } from "./magicui/aurora-text";

export interface TitleProps {
  title: string;
  description: string;
}

export default function TitleComponent({ title, description }: TitleProps) {
  return (
    <AnimatedElement animation="fade-up" className="text-center mb-4">
      <div className="grid bg-transparent gap-2 p-4 rounded-2xl justify-items-center">
        {/* <h1 className="sm:text-5xl text-2xl sm:pb-2 w-fit font-bold text-center bg-linear-to-b from-secondary dark:from-primary to-blue-800 dark:to-blue-600 bg-clip-text text-transparent"> */}
        <AuroraText className="sm:text-5xl text-3xl w-fit font-bold text-center">
          {title}
        </AuroraText>
        {/* </h1> */}

        <div className="max-w-4xl mx-auto">
          <p className="sm:text-lg text-sm text-center text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
}
