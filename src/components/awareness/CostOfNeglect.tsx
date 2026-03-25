import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CompareSliderScript } from "./CompareSliderScript";

const IMG_WITH_CARE =
  "/api/before-after-slider/after%20image.png";
const IMG_WITHOUT_CARE =
  "/api/before-after-slider/before%20image.png";

export function CostOfNeglect() {
  return (
    <div id="cost-of-neglect" className="scroll-mt-24">
      <CompareSliderScript />
      <section className="bg-[var(--color-bg-dark)] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="mb-10 text-center md:mb-12">
              <SectionEyebrow className="text-center">SEE THE DIFFERENCE</SectionEyebrow>
              <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-extrabold text-white">
                With Care. vs. Without Care.
              </h2>
              <p
                className="mx-auto max-w-2xl text-[length:var(--text-body-lg)]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Drag to see what consistent dental care protects you from.
              </p>
            </div>
          </Reveal>

          <Reveal staggerIndex={1}>
            <div
              data-compare-slider
              className="compare-slider mx-auto w-full max-w-[860px]"
              role="group"
              aria-label="Compare with care versus without care"
            >
              <div className="compare-slider__viewport">
                <img
                  className="compare-slider__base"
                  src={IMG_WITHOUT_CARE}
                  alt="Dental condition without consistent care"
                  draggable={false}
                />
                <img
                  className="compare-slider__top"
                  src={IMG_WITH_CARE}
                  alt=""
                  draggable={false}
                />
                <div className="compare-slider__handle" aria-hidden="true">
                  <div className="compare-slider__handle-line" />
                  <div className="compare-slider__handle-btn">
                    <svg
                      className="compare-slider__handle-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 6L5 12L9 18M15 6L19 12L15 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="compare-slider__hint" aria-hidden="true">
                  Drag to compare
                </p>
              </div>
              <div className="compare-slider__pills">
                <span className="compare-slider__pill compare-slider__pill--care">✓ With Care</span>
                <span className="compare-slider__pill compare-slider__pill--neglect">
                  ✗ Without Care
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
