import GettingStarted from "./getting-started";
import Security from "./security";
import UsingKeyura from "./using-keyura";
import TechnicalDetails from "./technical-details";
import Pricing from "./pricing";
import FAQ from "./faq";
import Support from "./support";

export default function DocumentationHome() {
  return (
    <div className="max-w-none">
      <h1 className="text-3xl font-bold text-primary">Keyura Documentation</h1>
      <div className="space-y-14">
        <GettingStarted />
        <Security />
        <UsingKeyura />
        <TechnicalDetails />
        <Pricing />
        <FAQ />
        <Support />
      </div>
    </div>
  );
}
