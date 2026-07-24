// ATENÇÃO: este arquivo é editado conforme a necessidade e não deve ser sobrescrito
// quando o dashboard_live.html for atualizado.
//
// Normalmente não precisa mexer aqui — a regra automática de contenção (que verifica
// se o nome do contato "contém" o nome da empresa/grupo, evitando conflitos) já resolve
// a maioria dos casos. Use isto só se algum contato específico continuar caindo em
// "Contato não identificado" mesmo depois disso.
//
// A chave é o nome do contato EXATAMENTE como aparece no Digisac (mesma grafia/maiúsculas),
// o valor é o nome da empresa EXATAMENTE como está cadastrado no SharePoint (campo Title).
const MANUAL_OVERRIDES = {
  // "ADMINISTRATIVO | GRUPO ESCALAR FINANCEIRO": "ESCALAR CONSULTORIA E PARTICIPACAO LTDA",
};
