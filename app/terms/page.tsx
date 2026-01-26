import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of the Silicality website, services, and programs.",
};

export default function TermsPage() {
  return (
    <section
      className="py-32 px-6"
      aria-labelledby="terms-of-service-heading"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h1
          id="terms-of-service-heading"
          className="text-4xl font-semibold tracking-tight"
        >
          Terms of Service
        </h1>

        <p className="text-neutral-400">
          By accessing or using the Silicality website, services, or programs,
          you agree to be bound by these Terms of Service.
        </p>

        <div>
          <h2 className="text-xl font-medium">
            Use of Website
          </h2>
          <p className="mt-3 text-neutral-400">
            You may use the Silicality website for lawful purposes only. You
            agree not to misuse the site, attempt unauthorized access, or
            interfere with its operation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Content
          </h2>
          <p className="mt-3 text-neutral-400">
            All content on this site is provided for informational purposes only
            and may be updated, modified, or removed at any time without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Limitation of Liability
          </h2>
          <p className="mt-3 text-neutral-400">
            To the maximum extent permitted by law, Silicality shall not be
            liable for any damages arising from the use or inability to use this
            website, services, or programs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Changes and Termination
          </h2>
          <p className="mt-3 text-neutral-400">
            Silicality may update these Terms of Service at any time. Continued
            use of the website after changes are posted constitutes acceptance
            of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Governing Law
          </h2>
          <p className="mt-3 text-neutral-400">
            These terms shall be governed by and interpreted in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Contact
          </h2>
          <p className="mt-3 text-neutral-400">
            For questions regarding these Terms of Service, contact{" "}
            <a
              href="mailto:silicality.dev@gmail.com"
              className="underline hover:text-neutral-300 transition"
            >
              silicality.dev@gmail.com
            </a>
            .
          </p>
        </div>

        <p className="text-sm text-neutral-500">
          Last updated: January 2026
        </p>
      </div>
    </section>
  );
}
