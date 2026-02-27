import PageHero from "@/components/PageHero";
import { SHED } from "@/lib/images";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        image={SHED.shop}
        height="h-[40vh]"
      />
      <section className="bg-warm-white py-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate font-cormorant text-lg">
          <h2 className="font-playfair text-charcoal text-3xl font-bold mb-6">Privacy &amp; Cookie Policy</h2>
          <p className="italic text-charcoal/70 leading-relaxed mb-5">The Goods Shed takes your privacy seriously. This policy explains how we collect, use and protect your personal information when you visit our website or contact us.</p>

          <h3 className="font-playfair text-charcoal text-xl font-bold mt-8 mb-3">Information We Collect</h3>
          <p className="italic text-charcoal/70 leading-relaxed mb-5">We may collect your name, email address, phone number and any information you submit through our contact and booking forms.</p>

          <h3 className="font-playfair text-charcoal text-xl font-bold mt-8 mb-3">How We Use Your Information</h3>
          <p className="italic text-charcoal/70 leading-relaxed mb-5">Your information is used only to respond to your enquiries, process bookings and (with your consent) send our newsletter. We do not share your data with third parties for marketing purposes.</p>

          <h3 className="font-playfair text-charcoal text-xl font-bold mt-8 mb-3">Cookies</h3>
          <p className="italic text-charcoal/70 leading-relaxed mb-5">This website uses essential cookies to ensure proper functionality. By continuing to browse, you agree to our use of cookies. You can disable cookies in your browser settings.</p>

          <h3 className="font-playfair text-charcoal text-xl font-bold mt-8 mb-3">Your Rights</h3>
          <p className="italic text-charcoal/70 leading-relaxed mb-5">You have the right to access, amend or delete any personal data we hold about you. Please contact us at <a href="mailto:info@goodsshed.co.uk" className="text-forest underline">info@goodsshed.co.uk</a> to exercise these rights.</p>

          <p className="italic text-charcoal/50 text-sm mt-10">Last updated: February 2026</p>
        </div>
      </section>
    </>
  );
}
