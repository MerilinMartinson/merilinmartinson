import { Download } from "lucide-react";
import { generateCV } from "@/lib/generateCV";

// ...
<button onClick={generateCV} className="...">
  <Download size={20} />
  Download CV (PDF)
</button>

const CV = () => {
  return (
    <section id="cv" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Curriculum Vitae<span className="accent-dot" />
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            A complete overview of my academic journey, research experience, 
            and professional activities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/CV_Merilin_Martinson.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={20} />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
