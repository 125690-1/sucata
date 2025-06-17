
async function enviarParaPlanilha() {
  const base = document.getElementById("base").value.toUpperCase();
  const data = document.getElementById("data").value;
  const mro = document.getElementById("atendido-por")?.value?.toUpperCase() || document.getElementById("recebido-por")?.value?.toUpperCase();
  const operacao = document.getElementById("solicitado-por")?.value?.toUpperCase() || document.getElementById("entregue-por")?.value?.toUpperCase();
  const lead = document.getElementById("lead").value.toUpperCase();
  const ane = document.getElementById("ane").value.toUpperCase();
  const ordemServico = document.getElementById("campo-os").value.toUpperCase();

  const materiais = Array.from(document.querySelectorAll("#tabela-materiais tr")).map(tr => {
    const inputs = tr.querySelectorAll("input");
    return {
      codigo: (inputs[0]?.value || "").toUpperCase(),
      descricao: (inputs[1]?.value || "").toUpperCase(),
      un: (inputs[2]?.value || "").toUpperCase(),
      qtd: (inputs[3]?.value || "")
    };
  }).filter(mat => mat.codigo && mat.descricao);

  const dados = {
    tipo: "SUCATA",
    base,
    data,
    mro,
    operacao,
    lead,
    ane,
    ordem_de_servico: ordemServico,
    materiais
  };

  try {
    const response = await fetch("https://backend-controle-materiais-818351890829.southamerica-east1.run.app/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
    const result = await response.json();
    console.log("Resultado:", result);
    alert(result.mensagem || result.erro || "Erro desconhecido.");
  } catch (err) {
    alert("Erro ao enviar para a planilha: " + err);
  }
}


document.getElementById("gerar-pdf").addEventListener("click", async function () {
  await enviarParaPlanilha();
  const doc = new window.jspdf.jsPDF();

  // Coletar dados
  const base = document.getElementById("base").value.toUpperCase();
  const dataInput = document.getElementById("data").value;
  let data = "";
  if (dataInput) {
    const partes = dataInput.split("-");
    if (partes.length === 3) {
      data = `${partes[2]} / ${partes[1]} / ${partes[0]}`;
    }
  }
  const recebeu = document.getElementById("recebido-por").value.toUpperCase();
  const lead = document.getElementById("lead").value.toUpperCase();
  const entregou = document.getElementById("entregue_por").value.toUpperCase();
  const ane = document.getElementById("ane").value.toUpperCase();
  const osInput = document.getElementById("campo-os");
  const ordemServico = osInput ? osInput.value.toUpperCase() : "";

  // Cabeçalho
  doc.setDrawColor(0);
  doc.line(15, 18, 195, 18);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("FORMULÁRIO DE SUCATA", 105, 26, null, null, "center");
  doc.line(15, 30, 195, 30);

  // Dados do formulário
  doc.setFontSize(13);

  doc.setFont("helvetica", "bold");
  doc.text("BASE:", 14, 40);
  doc.setFont("helvetica", "normal");
  doc.text(base, 29, 40);

  doc.setFont("helvetica", "bold");
  doc.text("DATA:", 150, 40);
  doc.setFont("helvetica", "normal");
  doc.text(data, 165, 40);

  doc.setFont("helvetica", "bold");
  doc.text("RECEBIDO POR:", 14, 47);
  doc.setFont("helvetica", "normal");
  doc.text(recebeu, 52, 47);

  doc.setFont("helvetica", "bold");
  doc.text("LEAD:", 150, 47);
  doc.setFont("helvetica", "normal");
  doc.text(lead, 165, 47);

  doc.setFont("helvetica", "bold");
  doc.text("ENTREGUE POR:", 14, 54);
  doc.setFont("helvetica", "normal");
  doc.text(entregou, 56, 54);

  doc.setFont("helvetica", "bold");
  doc.text("ANE:", 150, 54);
  doc.setFont("helvetica", "normal");
  doc.text(ane, 162, 54);

  if (ordemServico) {
    doc.setFont("helvetica", "bold");
    doc.text("ORDEM DE SERVIÇO:", 14, 61);
    doc.setFont("helvetica", "normal");
    doc.text(ordemServico, 63, 61);
  }

  // Tabela de materiais
  const materiais = Array.from(document.querySelectorAll("#tabela-materiais tr")).map(tr => {
    const tds = tr.querySelectorAll("input");
    return [
      (tds[0]?.value || "").toUpperCase(),
      (tds[1]?.value || "").toUpperCase(),
      (tds[2]?.value || "").toUpperCase(),
      (tds[3]?.value || "")
    ];
  }).filter(row => row.some(cell => cell.trim() !== ""));

  const tabelaInicio = ordemServico ? 70 : 65;

  doc.autoTable({
    startY: tabelaInicio,
    head: [["CÓDIGO", "DESCRIÇÃO DO MATERIAL", "UN", "QTD."]],
    body: materiais,
    headStyles: {
      fillColor: [64, 64, 64],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 13,
      halign: 'center'
    },
    styles: {
      fontSize: 11,
      textColor: [0, 0, 0]
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240]
    },
    columnStyles: {
      0: { cellWidth: 25, halign: 'center' },
      1: { cellWidth: 120 },
      2: { cellWidth: 15, halign: 'center' },
      3: { cellWidth: 20, halign: 'center' }
    }
  });

  // Rodapé com assinatura
  const pageHeight = doc.internal.pageSize.height;
  const rodapeY = pageHeight - 18;
  doc.line(20, rodapeY, 98, rodapeY);
  doc.text("MRO", 52, rodapeY + 5);
  doc.line(115, rodapeY, 190, rodapeY);
  doc.text("OPERAÇÃO", 139, rodapeY + 5);

  const tipo = "SUCATA";
  const nomeArquivo = ordemServico
    ? `${tipo} ${ordemServico}.pdf`
    : `${tipo} ${ane}.pdf`;
  doc.save(nomeArquivo);

  
});
