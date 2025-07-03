import { jsPDF } from "jspdf";

const downloadPDF = () => {
  // Create new PDF document
  const doc = new jsPDF("p", "mm", "a4");

  // Colors
  const primaryColor = "#059669"; // Emerald-600
  const darkColor = "#1f2937"; // Gray-800
  const lightColor = "#6b7280"; // Gray-500

  // Fonts and sizes
  const titleSize = 24;
  const subtitleSize = 14;
  const headerSize = 16;
  const bodySize = 11;
  const smallSize = 10;

  // Page margins
  const margin = 20;
  const pageWidth = 210;
  const contentWidth = pageWidth - margin * 2;

  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize: number,
    style = "normal"
  ) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);

    if (style === "bold") {
      doc.setFont("helvetica", "bold");
    } else {
      doc.setFont("helvetica", "normal");
    }

    doc.text(lines, x, y);
    return y + lines.length * (fontSize * 0.4);
  };

  // ==================== PRIMEIRA PÁGINA ====================

  // Header Section
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 70, "F");

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(titleSize);
  doc.setFont("helvetica", "bold");
  doc.text("Davit Markaryants", margin, 25);

  // Title
  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(
    "Acadêmico de Administração (8º período) & Assistente Administrativo",
    margin,
    35
  );

  // Contact Info
  doc.setFontSize(smallSize);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text("Email: davitermeliksetyan@gmail.com", margin, 48);
  doc.text("Telefone: (47) 99648-2135", margin, 55);
  doc.text("Localização: São Bento do Sul / SC • Remoto", margin, 62);

  // Reset text color for body content
  doc.setTextColor(darkColor);
  yPosition = 85;

  // About Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("SOBRE MIM", margin, yPosition);

  // Add underline
  doc.setLineWidth(0.5);
  doc.setDrawColor(primaryColor);
  doc.line(margin, yPosition + 2, margin + 40, yPosition + 2);

  yPosition += 8;
  doc.setTextColor(darkColor);
  doc.setFont("helvetica", "normal");
  const aboutText =
    "Acadêmico de Administração com experiência sólida em processos administrativos, controle de almoxarifado, compras, atendimento ao público e vendas. Procuro oportunidade como Assistente Administrativo ou áreas relacionadas para aplicar minha organização, visão sistêmica e foco em melhoria contínua, contribuindo com proatividade, facilidade de comunicação e resultados em ambientes dinâmicos.";
  yPosition = addText(aboutText, margin, yPosition, contentWidth, bodySize);

  yPosition += 10;

  // Experience Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("EXPERIÊNCIA PROFISSIONAL", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 70, yPosition + 2);

  yPosition += 12;

  // Experience 1
  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkColor);
  doc.text("Estagiário Administrativo", margin, yPosition);

  doc.setFontSize(bodySize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(primaryColor);
  doc.text("set 2023 – set 2025", pageWidth - margin - 30, yPosition);

  yPosition += 6;
  doc.setTextColor(lightColor);
  doc.text("Tribunal de Justiça de Santa Catarina", margin, yPosition);

  yPosition += 8;
  doc.setTextColor(darkColor);
  doc.setFontSize(smallSize);

  const exp1Tasks = [
    "• Organização e controle de patrimônio e estoque",
    "• Controle de folhas ponto dos terceirizados",
    "• Elaboração de requisições de compra",
    "• Uso de ERP, SEI, Pergamum e Teams",
    "• Organização de documentos físicos e digitais",
  ];

  exp1Tasks.forEach((task) => {
    doc.text(task, margin + 5, yPosition);
    yPosition += 4;
  });

  yPosition += 6;

  // Experience 2
  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkColor);
  doc.text("Vendedor (Temporário)", margin, yPosition);

  doc.setFontSize(bodySize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(primaryColor);
  doc.text("dez 2022 – fev 2023", pageWidth - margin - 30, yPosition);

  yPosition += 6;
  doc.setTextColor(lightColor);
  doc.text("Loja de Aparelhos Eletrônicos & Celulares", margin, yPosition);

  yPosition += 8;
  doc.setTextColor(darkColor);
  doc.setFontSize(smallSize);

  const exp2Tasks = [
    "• Venda consultiva de celulares e acessórios",
    "• Atingimento de metas mensais",
    "• Suporte pós-venda e dúvidas técnicas",
  ];

  exp2Tasks.forEach((task) => {
    doc.text(task, margin + 5, yPosition);
    yPosition += 4;
  });

  // ==================== SEGUNDA PÁGINA ====================

  // Add new page
  doc.addPage();
  yPosition = margin;

  // Skills Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("HABILIDADES", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 35, yPosition + 2);

  yPosition += 12;

  // Technical Skills
  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkColor);
  doc.text("Técnicas:", margin, yPosition);

  yPosition += 6;
  doc.setFontSize(smallSize);
  doc.setFont("helvetica", "normal");

  const techSkills = [
    "• Gestão de processos administrativos",
    "• Controle de estoque e patrimônio",
    "• Compras e negociação com fornecedores",
    "• ERP, SEI, Pergamum, Teams",
    "• Excel Básico",
  ];

  techSkills.forEach((skill) => {
    doc.text(skill, margin + 5, yPosition);
    yPosition += 4;
  });

  // Behavioral Skills (next to technical)
  let behavioralY = yPosition - techSkills.length * 4 - 6;
  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkColor);
  doc.text("Comportamentais:", margin + 95, behavioralY);

  behavioralY += 6;
  doc.setFontSize(smallSize);
  doc.setFont("helvetica", "normal");

  const behavioralSkills = [
    "• Sociabilidade e trabalho em equipe",
    "• Proatividade & aprendizado rápido",
    "• Organização e visão sistêmica",
    "• Boa comunicação e honestidade",
  ];

  behavioralSkills.forEach((skill) => {
    doc.text(skill, margin + 100, behavioralY);
    behavioralY += 4;
  });

  yPosition += 10;

  // Education Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("FORMAÇÃO", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 30, yPosition + 2);

  yPosition += 12;

  doc.setFontSize(subtitleSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkColor);
  doc.text("Bacharelado em Administração", margin, yPosition);

  doc.setFontSize(bodySize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(primaryColor);
  doc.text("Conclusão: dez 2026", pageWidth - margin - 30, yPosition);

  yPosition += 6;
  doc.setTextColor(lightColor);
  doc.text("Univille Universidade – São Bento do Sul / SC", margin, yPosition);

  yPosition += 20;

  // Languages Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("IDIOMAS", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 25, yPosition + 2);

  yPosition += 12;
  doc.setFontSize(smallSize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkColor);

  const languages = [
    "• Português – Fluente",
    "• Armênio – Nativo",
    "• Inglês – Intermediário a Avançado (Business English em desenvolvimento)",
  ];

  languages.forEach((lang) => {
    doc.text(lang, margin + 5, yPosition);
    yPosition += 5;
  });

  yPosition += 10;

  // Additional Information Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("INFORMAÇÕES ADICIONAIS", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 65, yPosition + 2);

  yPosition += 12;
  doc.setFontSize(smallSize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkColor);

  const additionalInfo = [
    "• Disponibilidade para início imediato.",
    "• CNH.",
    "• Disponibilidade para viagens.",
  ];

  additionalInfo.forEach((info) => {
    doc.text(info, margin + 5, yPosition);
    yPosition += 5;
  });

  yPosition += 15;

  // Contact Section
  doc.setFontSize(headerSize);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor);
  doc.text("CONTATO", margin, yPosition);
  doc.line(margin, yPosition + 2, margin + 25, yPosition + 2);

  yPosition += 12;

  doc.setFontSize(smallSize);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkColor);

  // Contact details
  doc.text("Email: davitermeliksetyan@gmail.com", margin + 5, yPosition);
  yPosition += 5;
  doc.text("Telefone: (47) 99648-2135", margin + 5, yPosition);
  yPosition += 5;
  doc.text(
    "Localização: São Bento do Sul / SC • Remoto",
    margin + 5,
    yPosition
  );
  yPosition += 5;
  doc.text(
    "LinkedIn: linkedin.com/in/davit-markaryants-824188294",
    margin + 5,
    yPosition
  );

  // Footer
  yPosition = 280;
  doc.setFontSize(smallSize);
  doc.setTextColor(lightColor);
  doc.setFont("helvetica", "italic");
  doc.text(
    "© 2025 Davit Markaryants. Todos os direitos reservados.",
    margin,
    yPosition
  );

  // Save the PDF
  doc.save("Davit_Markaryants_Curriculo.pdf");
};

export default downloadPDF;
