import { CommonProblems } from "./CommonProblems";
import { ChildrenHealth } from "./ChildrenHealth";
import { FaqSection } from "./FaqSection";
import { HubHero } from "./HubHero";
import { PreventionZone } from "./PreventionZone";
import { TreatmentGuide } from "./TreatmentGuide";

export function AwarenessPage() {
  return (
    <>
      <HubHero />
      <PreventionZone />
      <CommonProblems />
      <TreatmentGuide />
      <ChildrenHealth />
      <FaqSection />
    </>
  );
}
