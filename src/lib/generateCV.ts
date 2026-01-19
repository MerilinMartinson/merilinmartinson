import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateCV = async () => {
  // Create a print-optimized container
  const printContainer = document.createElement("div");
  printContainer.style.width = "800px";
  printContainer.style.padding = "40px";
  printContainer.style.position = "absolute";
  printContainer.style.left = "-9999px";
  printContainer.style.top = "0";
  printContainer.style.backgroundColor = "#ffffff";
  printContainer.style.color = "#1a1a1a";
  printContainer.style.fontFamily = "'Space Grotesk', sans-serif";

  printContainer.innerHTML = `
    <style>
      .cv-container { font-size: 11px; line-height: 1.4; }
      .cv-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #1a1a1a; padding-bottom: 15px; }
      .cv-name { font-family: 'EB Garamond', serif; font-size: 32px; font-weight: 400; margin: 0; }
      .cv-title { font-size: 12px; color: #666; margin: 5px 0; text-transform: uppercase; letter-spacing: 2px; }
      .cv-contact { font-size: 10px; color: #444; }
      .cv-section { margin-bottom: 16px; }
      .cv-section-title { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-bottom: 10px; }
      .cv-item { margin-bottom: 10px; }
      .cv-item-header { display: flex; justify-content: space-between; align-items: baseline; }
      .cv-item-title { font-weight: 600; font-size: 11px; }
      .cv-item-period { font-size: 10px; color: #666; }
      .cv-item-subtitle { font-size: 10px; color: #666; margin-top: 2px; }
      .cv-item-desc { font-size: 10px; color: #444; margin-top: 3px; }
      .cv-bullet { margin-left: 12px; position: relative; padding-left: 10px; font-size: 10px; margin-top: 3px; }
      .cv-bullet::before { content: "•"; position: absolute; left: 0; }
      .cv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      .cv-skills-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
      .cv-skill-label { font-weight: 600; font-size: 10px; min-width: 80px; }
      .cv-skill-value { font-size: 10px; color: #444; }
    </style>
    <div class="cv-container">
      <div class="cv-header">
        <h1 class="cv-name">Merilin Martinson</h1>
        <p class="cv-title">PhD Candidate in Economics</p>
        <p class="cv-contact">merilinmartinson@gmail.com | +49 178 30 61 687 | github.com/MerilinMartinson | linkedin.com/in/merilin-martinson</p>
      </div>

      <div class="cv-section">
        <h2 class="cv-section-title">Education</h2>
         <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">PhD Economics -- Berlin School of Economics/Humboldt-Universität zu Berlin, Germany</span>
            <span class="cv-item-period">2025--...</span>
          </div>
          <div class="cv-item-desc">Advisors: Alexandra Spitz-Oener, Joshua Angrist</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">MRes Economics -- University College London, UK</span>
            <span class="cv-item-period">2024--2025</span>
          </div>
           <div class="cv-item-subtitle">Grade: Distinction</div>
          <div class="cv-item-desc">Obligatory coursework for a structured PhD programme in Economics</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">MSc in Economics and Management Science -- Humboldt-Universität zu Berlin, Germany</span>
            <span class="cv-item-period">2021--2024</span>
          </div>
          <div class="cv-item-subtitle">Specialization: Quantitative Methods | Grade: 1.0/1.0</div>
          <div class="cv-item-desc">Best overall graduate of the School of Business and Economics</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">BA in International Business -- HTW Berlin, Germany</span>
            <span class="cv-item-period">2018--2021</span>
          </div>
          <div class="cv-item-subtitle">Specialization: Applied Statistics | Grade: 1.26/1.0</div>
          <div class="cv-item-desc">Best overall graduate of the 2020-2022 cohorts</div>
        </div>
      </div>

      <div class="cv-section">
        <h2 class="cv-section-title">Experience</h2>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">Research Assistant -- Humboldt-Universität zu Berlin</span>
            <span class="cv-item-period">Jan 2023--Sept 2024</span>
          </div>
          <div class="cv-item-subtitle">Supervisors: Prof. A. Spitz-Oener, Prof. S. Sardoschau, Prof. J. Angrist (MIT)</div>
          <div class="cv-bullet">Production function of Economics graduate education (NBER Working Paper No. 33281)</div>
          <div class="cv-bullet">Effect of right-wing protests on hate crimes (IZA DP No. 17763)</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">Research Traineeship -- European Central Bank</span>
            <span class="cv-item-period">Aug 2023--April 2024</span>
          </div>
          <div class="cv-item-subtitle">DG Monetary Policy, Monetary Analysis division -- Supervisor: Prof. Carlo Altavilla</div>
          <div class="cv-bullet">Enhanced analytical and econometric tools (R, Stata)</div>
          <div class="cv-bullet">Contributed to empirical microeconometric research on bank portfolio composition</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">Data Analyst -- Ladenzeile GmbH, Berlin</span>
            <span class="cv-item-period">Oct 2018--Oct 2020 / Jun 2021--Nov 2022</span>
          </div>
          <div class="cv-bullet">User journey analysis, anomaly detection, workshops on statistical methods</div>
        </div>
        <div class="cv-item">
          <div class="cv-item-header">
            <span class="cv-item-title">Data Scientist (Internship) -- Messa App S.A.S., Bogotá, Colombia</span>
            <span class="cv-item-period">Nov 2020--May 2021</span>
          </div>
          <div class="cv-bullet">Designed experiments, developed dynamic pricing algorithm using ML (Python)</div>
        </div>
      </div>

      <div class="cv-section">
        <h2 class="cv-section-title">Research</h2>
        <div class="cv-bullet">Saved by the gig? Technology, informal employment, and economic integration of immigrants (2024, MSc thesis)</div>
        <div class="cv-bullet">A microeconometric analysis of the violent crime-immigration nexus in Colombia (2023)</div>
        <div class="cv-bullet">Threats at home: Effect of neighbourhood crime on far-right party support (2023)</div>
        <div class="cv-bullet">Making Peace Last: Reintegration of Ex-Combatants in Colombia (2022)</div>
        <div class="cv-bullet">The Choice of Exchange Rate Regime in Emerging Markets (2021, BA thesis)</div>
      </div>

      <div class="cv-section">
        <h2 class="cv-section-title">Presentations</h2>
        <div class="cv-item-desc"><strong>Pre-PhD:</strong> 2019 Herkunft Zukunft, 2021 Berlin Conference for Student Research</div>
        <div class="cv-item-desc"><strong>PhD:</strong> 2025 Eesti Panga teaduspreemiate üleandmine, 2025 Eesti Panga jõuluseminar</div>
      </div>

      <div class="cv-section">
        <h2 class="cv-section-title">Awards & Honors</h2>
        <div class="cv-bullet">2025: Rein Otsason Foundation Scholarship</div>
        <div class="cv-bullet">2024: Special Prize in Social Sciences, National Contest for Research Papers (Estonian Research Council)</div>
        <div class="cv-bullet">2024: Best Graduate of School of Business and Economics (Humboldt-Universität, Kurze-Preis)</div>
        <div class="cv-bullet">2024: Deutschlandstipendium (Ferdinand und Charlotte Schimmelpfennig-Stiftung)</div>
        <div class="cv-bullet">2023: Deutschlandstipendium (Deutsche Bank)</div>
        <div class="cv-bullet">2021: Best Graduate of the Programme (HTW Berlin)</div>
        <div class="cv-bullet">2020: PROMOS Scholarship (DAAD)</div>
        <div class="cv-bullet">2014: Medal for Academic Excellence (Government of Estonia)</div>
      </div>

      <div class="cv-grid">
        <div class="cv-section">
          <h2 class="cv-section-title">Skills</h2>
          <div class="cv-skills-row"><span class="cv-skill-label">Programming:</span><span class="cv-skill-value">Python, SQL, R, HTML, Matlab, Stata</span></div>
          <div class="cv-skills-row"><span class="cv-skill-label">Languages:</span><span class="cv-skill-value">Estonian, English, Spanish, German, Italian, Finnish, Russian</span></div>
          <div class="cv-skills-row"><span class="cv-skill-label">Tools:</span><span class="cv-skill-value">Git, Tableau, LaTeX, Excel, MS Office, AWS</span></div>
        </div>
        <div class="cv-section">
          <h2 class="cv-section-title">Service & Volunteering</h2>
          <div class="cv-bullet">Research Mentor, Lumiere Education (2025--present)</div>
          <div class="cv-bullet">Mentor, Women in Economics initiative (2022--present)</div>
          <div class="cv-bullet">University representative, HTW Berlin (2018--2021)</div>
          <div class="cv-bullet">Ballet and English teacher, More Than English Colombia (2016--2018)</div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(printContainer);

  try {
    const canvas = await html2canvas(printContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF("p", "mm", "a4");
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Merilin_Martinson_CV.pdf");
  } finally {
    document.body.removeChild(printContainer);
  }
};
