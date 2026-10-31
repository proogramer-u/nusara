import { Brand } from "./Brand";
/** Decorative opening sequence. CSS dismisses it even without JavaScript. */
export function BrandIntro() {
  return (
    <div className="brand-intro" aria-hidden="true">
      <div className="brand-intro-content">
        <Brand />
        <p>Heritage That Fits Your Everyday</p>
        <span className="intro-line" />
      </div>
    </div>
  );
}
