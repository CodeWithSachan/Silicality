// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Privacy Policy",
//   description:
//     "Privacy policy explaining how Silicality collects, uses, and protects user information.",
// };

// export default function PrivacyPolicyPage() {
//   return (
//     <section className="py-32 px-6">
//       <div className="max-w-3xl mx-auto space-y-8">
//         <h1 className="text-4xl font-semibold tracking-tight">
//           Privacy Policy
//         </h1>

//         <p className="text-neutral-400">
//           Silicality respects your privacy and is committed to protecting your
//           personal information.
//         </p>

//         <div>
//           <h2 className="text-xl font-medium">Information We Collect</h2>
//           <p className="mt-3 text-neutral-400">
//             When you contact us through our website, we may collect information
//             such as your name, email address, and message content.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-medium">How We Use Your Information</h2>
//           <p className="mt-3 text-neutral-400">
//             We use the information you provide solely to respond to inquiries,
//             communicate with you, and discuss potential projects,
//             collaborations, or programs.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-medium">Data Sharing</h2>
//           <p className="mt-3 text-neutral-400">
//             We do not sell, rent, or share your personal information with third
//             parties except where required by law.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-medium">Data Security</h2>
//           <p className="mt-3 text-neutral-400">
//             We take reasonable steps to protect your information, but no method
//             of transmission over the internet is completely secure.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-medium">Contact</h2>
//           <p className="mt-3 text-neutral-400">
//             If you have any questions about this Privacy Policy, you can contact
//             us at{" "}
//             <a
//               href="mailto:silicality.dev@gmail.com"
//               className="underline"
//             >
//               silicality.dev@gmail.com
//             </a>
//             .
//           </p>
//         </div>

//         <p className="text-sm text-neutral-500">
//           Last updated: January 2026
//         </p>
//       </div>
//     </section>
//   );
// }
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Silicality collects, uses, and protects personal information across its website, programs, and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section
      className="py-32 px-6"
      aria-labelledby="privacy-policy-heading"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h1
          id="privacy-policy-heading"
          className="text-4xl font-semibold tracking-tight"
        >
          Privacy Policy
        </h1>

        <p className="text-neutral-400">
          Silicality respects your privacy and is committed to protecting the
          personal information you share with us through our website, programs,
          and services.
        </p>

        <div>
          <h2 className="text-xl font-medium">
            Information We Collect
          </h2>
          <p className="mt-3 text-neutral-400">
            When you contact us or participate in Silicality initiatives, we may
            collect personal information such as your name, email address, and
            message content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            How We Use Your Information
          </h2>
          <p className="mt-3 text-neutral-400">
            We use your information only to respond to inquiries, communicate
            with you, provide requested services, and discuss potential projects,
            collaborations, or programs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Third-Party Services
          </h2>
          <p className="mt-3 text-neutral-400">
            Silicality may use trusted third-party tools or platforms to operate
            its website, manage communications, or run programs. These services
            are used only as necessary and are expected to follow appropriate
            data protection practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Data Sharing
          </h2>
          <p className="mt-3 text-neutral-400">
            We do not sell, rent, or trade your personal information. Data may be
            disclosed only if required by law or to protect the rights and
            safety of Silicality and its users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Data Security
          </h2>
          <p className="mt-3 text-neutral-400">
            We take reasonable measures to protect your information. However,
            no method of transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Contact
          </h2>
          <p className="mt-3 text-neutral-400">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
