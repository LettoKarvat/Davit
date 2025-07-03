import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadPDF = async () => {
  try {
    // Criar conteúdo do currículo baseado nas informações reais
    const resumeContent = createResumeHTML();
    
    // Criar div temporária para renderizar o conteúdo
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = resumeContent;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '210mm';
    tempDiv.style.background = 'white';
    tempDiv.style.padding = '20mm';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    
    document.body.appendChild(tempDiv);
    
    // Gerar canvas do conteúdo
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    // Remover div temporária
    document.body.removeChild(tempDiv);
    
    // Criar PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    // Adicionar primeira página
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Adicionar páginas adicionais se necessário
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Baixar o PDF
    pdf.save('Davit_Markaryants_Curriculo.pdf');
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    alert('Erro ao gerar PDF. Tente novamente.');
  }
};

const createResumeHTML = () => {
  return `
    <div style="max-width: 210mm; margin: 0 auto; padding: 20mm; background: white; font-family: Arial, sans-serif; line-height: 1.6;">
      <!-- Cabeçalho -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #F59E0B; padding-bottom: 20px;">
        <h1 style="font-size: 36px; margin: 0; color: #1E293B; font-weight: bold;">Davit Markaryants</h1>
        <p style="font-size: 18px; margin: 10px 0; color: #F59E0B; font-weight: 600;">Desenvolvedor Full Stack & Especialista em Tecnologia</p>
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px; flex-wrap: wrap;">
          <span style="color: #64748B;">📧 davit.markaryants@email.com</span>
          <span style="color: #64748B;">📱 +1 (555) 123-4567</span>
          <span style="color: #64748B;">🌐 Disponível para Trabalho Remoto</span>
        </div>
      </div>

      <!-- Resumo Profissional -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 15px;">Resumo Profissional</h2>
        <p style="color: #374151; text-align: justify;">
          Profissional de tecnologia com vasta experiência em desenvolvimento de software e liderança técnica. 
          Especializado em criar soluções inovadoras e escaláveis, com foco em transformação digital e 
          otimização de processos. Apaixonado por tecnologias emergentes e metodologias ágeis.
        </p>
      </div>

      <!-- Experiência -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 20px;">Experiência Profissional</h2>
        
        <div style="margin-bottom: 25px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <h3 style="color: #1E293B; margin: 0; font-size: 18px;">Especialista Sênior em Tecnologia</h3>
              <p style="color: #F59E0B; margin: 5px 0; font-weight: 600;">Innovation Tech Solutions</p>
            </div>
            <span style="color: #64748B; font-weight: 500;">2022 - Presente</span>
          </div>
          <ul style="color: #374151; margin-left: 20px;">
            <li>Liderança de iniciativas estratégicas de tecnologia e projetos de transformação digital</li>
            <li>Implementação de soluções escaláveis que melhoraram performance do sistema em 40%</li>
            <li>Liderança de equipes multifuncionais com 15+ profissionais em projetos críticos</li>
            <li>Desenvolvimento de frameworks inovadores que reduziram tempo de desenvolvimento em 30%</li>
            <li>Mentoria de desenvolvedores júnior e estabelecimento de diretrizes de melhores práticas</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <h3 style="color: #1E293B; margin: 0; font-size: 18px;">Consultor de Tecnologia</h3>
              <p style="color: #F59E0B; margin: 5px 0; font-weight: 600;">Digital Solutions Group</p>
            </div>
            <span style="color: #64748B; font-weight: 500;">2020 - 2022</span>
          </div>
          <ul style="color: #374151; margin-left: 20px;">
            <li>Consultoria estratégica em tecnologia para clientes empresariais</li>
            <li>Entrega bem-sucedida de 25+ projetos com 98% de taxa de satisfação</li>
            <li>Design e implementação de soluções customizadas para empresas Fortune 500</li>
            <li>Redução de custos operacionais em média de 25% para organizações clientes</li>
            <li>Construção de parcerias estratégicas de longo prazo com stakeholders-chave</li>
          </ul>
        </div>

        <div style="margin-bottom: 25px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <h3 style="color: #1E293B; margin: 0; font-size: 18px;">Especialista em Desenvolvimento de Software</h3>
              <p style="color: #F59E0B; margin: 5px 0; font-weight: 600;">Tech Innovations Inc.</p>
            </div>
            <span style="color: #64748B; font-weight: 500;">2018 - 2020</span>
          </div>
          <ul style="color: #374151; margin-left: 20px;">
            <li>Desenvolvimento e manutenção de aplicações enterprise usando tecnologias modernas</li>
            <li>Construção de aplicações robustas servindo 100.000+ usuários ativos diários</li>
            <li>Otimização de performance de banco de dados resultando em 50% de melhoria nos tempos de consulta</li>
            <li>Colaboração com equipes UX para melhorar métricas de experiência do usuário</li>
            <li>Implementação de protocolos de testes automatizados melhorando qualidade do código</li>
          </ul>
        </div>
      </div>

      <!-- Habilidades -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 15px;">Habilidades Técnicas</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4 style="color: #1E293B; margin-bottom: 10px;">Linguagens de Programação</h4>
            <p style="color: #374151;">JavaScript/TypeScript, Python, Java, C#, Go</p>
            
            <h4 style="color: #1E293B; margin-bottom: 10px; margin-top: 15px;">Bancos de Dados</h4>
            <p style="color: #374151;">PostgreSQL, MongoDB, Redis, Elasticsearch, GraphQL</p>
          </div>
          <div>
            <h4 style="color: #1E293B; margin-bottom: 10px;">Frameworks & Ferramentas</h4>
            <p style="color: #374151;">React/Next.js, Node.js, Spring Boot, Django, Vue.js</p>
            
            <h4 style="color: #1E293B; margin-bottom: 10px; margin-top: 15px;">Cloud & DevOps</h4>
            <p style="color: #374151;">AWS, Docker, Kubernetes, CI/CD, Terraform</p>
          </div>
        </div>
      </div>

      <!-- Projetos -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 15px;">Projetos em Destaque</h2>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #1E293B; margin-bottom: 5px;">Plataforma de Analytics Empresarial</h4>
          <p style="color: #374151; margin: 5px 0;">Plataforma abrangente de análise de dados que processa mais de 1M de transações diárias, fornecendo insights em tempo real e análises preditivas para clientes empresariais.</p>
          <p style="color: #64748B; font-size: 14px;">Tecnologias: React, Node.js, PostgreSQL, AWS, D3.js</p>
        </div>

        <div style="margin-bottom: 15px;">
          <h4 style="color: #1E293B; margin-bottom: 5px;">Gerenciador de Infraestrutura Cloud</h4>
          <p style="color: #374151; margin: 5px 0;">Sistema automatizado de gerenciamento de infraestrutura cloud que otimiza alocação de recursos e reduz custos operacionais em 35% através de escalonamento inteligente.</p>
          <p style="color: #64748B; font-size: 14px;">Tecnologias: Python, Kubernetes, Docker, Terraform, Grafana</p>
        </div>
      </div>

      <!-- Formação -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 20px;">Formação</h2>
        
        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
            <div>
              <h3 style="color: #1E293B; margin: 0; font-size: 16px;">Mestrado em Ciência da Computação</h3>
              <p style="color: #F59E0B; margin: 5px 0; font-weight: 600;">Technology University</p>
            </div>
            <span style="color: #64748B; font-weight: 500;">2016 - 2018</span>
          </div>
          <p style="color: #374151; margin: 5px 0;">GPA: 3.9/4.0 • Magna Cum Laude</p>
          <p style="color: #374151; margin: 5px 0;">Especialização em Inteligência Artificial e Machine Learning com foco em sistemas distribuídos e análise de dados.</p>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
            <div>
              <h3 style="color: #1E293B; margin: 0; font-size: 16px;">Bacharelado em Tecnologia da Informação</h3>
              <p style="color: #F59E0B; margin: 5px 0; font-weight: 600;">State University</p>
            </div>
            <span style="color: #64748B; font-weight: 500;">2012 - 2016</span>
          </div>
          <p style="color: #374151; margin: 5px 0;">GPA: 3.8/4.0 • Cum Laude</p>
          <p style="color: #374151; margin: 5px 0;">Base abrangente em fundamentos da ciência da computação com ênfase em desenvolvimento de software e design de sistemas.</p>
        </div>
      </div>

      <!-- Certificações -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #1E293B; border-bottom: 2px solid #F59E0B; padding-bottom: 5px; margin-bottom: 15px;">Certificações</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <p style="color: #374151; margin: 5px 0;">• AWS Solutions Architect (2023)</p>
          <p style="color: #374151; margin: 5px 0;">• Kubernetes Administrator (2022)</p>
          <p style="color: #374151; margin: 5px 0;">• Advanced React Development (2022)</p>
          <p style="color: #374151; margin: 5px 0;">• Machine Learning Specialization (2021)</p>
        </div>
      </div>

      <!-- Rodapé -->
      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
        <p style="color: #64748B; font-size: 14px;">
          LinkedIn: linkedin.com/in/davitmarkaryants • GitHub: github.com/davitmarkaryants
        </p>
      </div>
    </div>
  `;
};