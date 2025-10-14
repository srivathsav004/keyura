export default function FAQ() {
  return (
    <section id="faq">
      <h2 className="text-2xl font-semibold text-slate-800">FAQ</h2>
      <h3 id="common" className="mt-4 text-xl font-semibold">Common Questions</h3>
      <p>Answers to frequently asked questions about storing, decrypting, and managing your data.</p>
      <h3 id="troubleshooting" className="mt-6 text-xl font-semibold">Troubleshooting</h3>
      <p>Verify network (Polygon), wallet connection, and exact password. Passwords are not recoverable.</p>
      <h3 id="best-practices" className="mt-6 text-xl font-semibold">Best Practices</h3>
      <ul>
        <li>Use strong, unique passwords per document</li>
        <li>Store passwords in a secure manager</li>
        <li>Use descriptive names and periodically verify access</li>
      </ul>
    </section>
  );
}
