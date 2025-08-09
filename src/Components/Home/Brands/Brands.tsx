import { brandImages } from "../../../Constants/index.ts";
import "./brands.css";

export const Brands = () => {
  return (
    <div className="main-container center">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-9 md:gap-7 lg:gap-10 xl:gap-20">
        {brandImages.map((src, index) => (
          <div
            key={index}
            className="relative group p-5 brand-item overflow-hidden rounded-lg center"
          >
            <img
              src={src}
              alt={`brand-${index}`}
              className="md:h-12 z-10 relative"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
