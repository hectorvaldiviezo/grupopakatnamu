import { AnimatedElement } from "./animated-element";

export interface TitleProps {
  title: string;
  description: string;
}

export default function TitleComponent({ title, description }: TitleProps) {
  return (
    <AnimatedElement animation="fade-up" className="text-center mb-16">
      <div className="grid bg-linear-to-r backdrop-blur-3xl p-4 gap-4 mb-8 rounded-2xl justify-items-center">
        <h1 className="sm:text-4xl text-2xl w-fit uppercase font-bold text-center text-primary">
          {title}
        </h1>

        <div className="max-w-4xl mx-auto">
          <p className="sm:text-lg text-xs text-center text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
}
