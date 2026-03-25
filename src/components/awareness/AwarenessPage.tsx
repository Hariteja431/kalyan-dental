import { CommonProblems } from "./CommonProblems";
import { ChildrenHealth } from "./ChildrenHealth";
import { CostOfNeglect } from "./CostOfNeglect";
import { FaqSection } from "./FaqSection";
import { HubHero } from "./HubHero";
import { PreventionZone } from "./PreventionZone";
import { TreatmentGuide } from "./TreatmentGuide";

export function AwarenessPage() {
  return (
    <>
      <HubHero />
      <PreventionZone />
      <CostOfNeglect />
      <CommonProblems />
      <TreatmentGuide />
      <ChildrenHealth />
      <FaqSection />
    </>
  );
}
