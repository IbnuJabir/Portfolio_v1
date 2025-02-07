import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-slate-600">
      <h2 className="text-3xl font-semibold text-gray-800">101. Let’s Have A Chat</h2>
      
      <div className="mt-6 w-full max-w-lg p-6 shadow-md rounded-2xl border">
        <p className="text-gray-600 text-center">I am available at</p>

        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-2 text-lg text-blue-600">
            <Phone className="w-5 h-5" />
            <span>+60172691932</span>
          </div>

          <div className="flex items-center gap-2 text-lg text-blue-600">
            <Mail className="w-5 h-5" />
            <a href="mailto:kedirjabir12@gmail.com" className="hover:underline">
              kedirjabir12@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6 text-blue-600">
          <a href="#" className="hover:scale-110 transition"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:scale-110 transition"><Github className="w-6 h-6" /></a>
        </div>
      </div>
    </section>
  );
}
