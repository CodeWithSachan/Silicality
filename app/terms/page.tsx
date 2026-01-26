import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Silicality website and services.",
};

export default function TermsPage() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Terms of Service
        </h1>

        <p className="text-neutral-400">
          By accessing or using the Silicality website, you agree to these Terms
          of Service.
        </p>

        <div>
          <h2 className="text-xl font-medium">Use of Website</h2>
          <p className="mt-3 text-neutral-400">
            You may use this website for lawful purposes only. You agree not to
            misuse the site or attempt to disrupt its operation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Content</h2>
          <p className="mt-3 text-neutral-400">
            All content on this site is provided for informational purposes only
            and may change without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Limitation of Liability</h2>
          <p className="mt-3 text-neutral-400">
            Silicality is not liable for any damages arising from the use or
            inability to use this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-3 text-neutral-400">
            For questions regarding these terms, contact{" "}
            <a
              href="mailto:silicality.dev@gmail.com"
              className="underline"
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
