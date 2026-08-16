import { site } from "@/data/config";

export default function WhatsAppButton({
  messaggio,
  label = "Scrivici su WhatsApp",
  fixed = true,
  numero,
  testoSempreVisibile = false,
}: {
  messaggio?: string;
  label?: string;
  fixed?: boolean;
  numero?: string;
  testoSempreVisibile?: boolean;
}) {
  const testo = encodeURIComponent(messaggio || site.whatsappMessaggioDefault);
  const href = `https://wa.me/${numero || site.whatsappNumero}?text=${testo}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${fixed ? "fixed bottom-5 right-5 z-50" : "relative"} flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] md:text-base`}
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.393.7 4.62 1.912 6.494L4 29l7.708-1.86A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3Zm0 21.75c-1.97 0-3.85-.55-5.47-1.51l-.392-.232-4.578 1.104 1.13-4.463-.257-.407A9.71 9.71 0 0 1 5.25 15c0-5.93 4.82-10.75 10.751-10.75S26.75 9.07 26.75 15 21.933 24.75 16.001 24.75Zm5.73-8.02c-.31-.156-1.84-.907-2.126-1.01-.286-.104-.494-.156-.702.156-.208.312-.806 1.01-.988 1.218-.182.208-.364.234-.674.078-.31-.156-1.31-.483-2.497-1.54-.923-.823-1.547-1.84-1.728-2.152-.182-.312-.02-.48.137-.636.14-.14.311-.364.467-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.69-.962-2.314-.253-.61-.51-.527-.702-.537l-.598-.01c-.208 0-.546.078-.832.39-.286.312-1.09 1.066-1.09 2.6s1.116 3.017 1.272 3.225c.156.208 2.196 3.354 5.322 4.703.744.322 1.324.514 1.776.658.746.238 1.424.204 1.96.124.598-.089 1.84-.752 2.1-1.478.259-.727.259-1.35.182-1.478-.078-.13-.286-.208-.598-.364Z" />
      </svg>
      <span className={testoSempreVisibile ? "inline" : "hidden sm:inline"}>{label}</span>
    </a>
  );
}
