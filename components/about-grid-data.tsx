import React from "react";
import { Card } from "./layout-grid";

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Borehole Drilling</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Expert borehole drilling services providing reliable access to groundwater
      for homes, schools, and communities across Uganda.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Water Filtration</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Advanced multi-stage filtration systems ensuring safe, clean drinking
      water for every household.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Community Projects</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Supplying clean water to schools, health clinics, and villages —
      transforming lives across rural Uganda.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Purification Plants</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Large-scale water purification infrastructure serving urban and peri-urban
      communities with safe, treated water.
    </p>
  </div>
);

export const aboutGridCards: Card[] = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=3538&auto=format&fit=crop",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=3540&auto=format&fit=crop",
  },
];
