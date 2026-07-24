// ATENÇÃO: este arquivo é editado conforme a necessidade e não deve ser sobrescrito
// quando o dashboard_live.html for atualizado.
//
// Normalmente não precisa mexer aqui — a regra automática de contenção (que verifica
// se o nome do contato "contém" o nome da empresa/grupo, evitando conflitos) já resolve
// a maioria dos casos. Use isto só se algum contato específico continuar caindo em
// "Contato não identificado" mesmo depois disso.
//
// A chave é o nome do contato como aparece no Digisac, o valor é o nome da empresa como
// está cadastrado no SharePoint (campo Title). Maiúsculas/minúsculas e espaços extras não
// importam — o sistema já normaliza isso automaticamente na comparação.
const MANUAL_OVERRIDES = {
  // "ADMINISTRATIVO | GRUPO ESCALAR FINANCEIRO": "ESCALAR CONSULTORIA E PARTICIPACAO LTDA",
};
