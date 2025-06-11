
document.getElementById("gerarPdfBtn").addEventListener("click", async function () {
  const tabela = document.getElementById("tabela");
  const rows = tabela.querySelectorAll("tbody tr");

  const materiais = [];
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const codigo = cells[0].querySelector("input")?.value || "";
    const descricao = cells[1].querySelector("input")?.value || "";
    const un = cells[2].querySelector("input")?.value || "";
    const qtd = cells[3].querySelector("input")?.value || "";

    if (codigo || descricao || un || qtd) {
      materiais.push({ codigo, descricao, un, qtd });
    }
  });

  const base = document.getElementById("base")?.value || "";
  const data = document.getElementById("data")?.value || "";
  const recebeu = document.getElementById("recebeu")?.value || "";
  const entregou = document.getElementById("entregou")?.value || "";
  const ane = document.getElementById("ane")?.value || "";
  const ordemServico = document.getElementById("os")?.value || "";
  const lead = document.getElementById("equipe")?.value || "";

  const payload = {
    tipo: "SUCATA",
    base,
    data,
    recebido_por: recebeu,
    entregou_por: entregou,
    ane,
    ordem_servico: ordemServico,
    lead,
    materiais,
  };

  try {
    const response = await fetch("https://backend-atendimento-materiais-818351890829.southamerica-east1.run.app/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.status === "sucesso") {
      alert("Dados enviados com sucesso!");
    } else {
      alert("Erro ao enviar dados: " + result.mensagem);
    }
  } catch (error) {
    alert("Erro ao conectar com o servidor: " + error.message);
  }
});
