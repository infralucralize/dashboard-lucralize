// ATENÇÃO: este arquivo é editado por você e NÃO deve ser sobrescrito quando o
// dashboard_live.html for atualizado.
//
// Cada URL do Digisac tem sua própria entrada aqui, com seu próprio token cifrado
// e sua própria configuração de onde fica o cadastro de clientes no SharePoint.
// Todas as contas usam a MESMA senha de acesso — o que muda é qual bloco cifrado
// e qual lista do SharePoint são usados, dependendo da URL que a pessoa digitar
// no campo "URL base do Digisac" do painel.
//
// A chave de cada entrada é a URL do Digisac SEM "https://" e sem barra no final
// (ex.: "lucralizecontabil.digisac.me").

const DIGISAC_ACCOUNTS = {

  "lucralizecontabil.digisac.me": {
    // Cole aqui o bloco gerado pela ferramenta "gerador_token_cifrado.html"
    // (o que você já tinha configurado antes — é só mover pra cá).
    tokenBlob: {"salt":"qRKMSPO2fosAJi+69kvYWw==","iv":"Sm1sau+6ZN1jGMYO","ct":"QuO6rzcWfvuETelZudHWM5U578AU9BjCnkybpATxzDgjg9ydKzDIGq4OCLQRn5H25xKrFBxS3Ak="},
    sharepoint: {
      hostname: "lucralize.sharepoint.com",
      sitePath: null, // null = site raiz (não tem /sites/algumacoisa/ na URL)
      listName: "Controle de Clientes",
      fields: {
        title: "Title",
        cnpj: "CNPJ_x002f_CPF_x002f_CEI",
        situacao: "Situa_x00e7__x00e3_o",
        grupo: "GrupoEmpresarial"
      }
    }
  },

  // Segunda conta (Lucralize Tech) — preencher depois de rodar o explorador de campos
  // "explorador_lista_sharepoint.html" pra descobrir os nomes exatos das colunas dessa lista.
  "SUBSTITUA_PELA_URL_DO_DIGISAC_TECH": {
    tokenBlob: {"salt":"COLE_AQUI","iv":"COLE_AQUI","ct":"COLE_AQUI"},
    sharepoint: {
      hostname: "lucralize.sharepoint.com",
      sitePath: "LUCRALIZETECH",
      listName: "Base de Usuários",
      fields: {
        title: "COLE_AQUI_O_NOME_DO_CAMPO",
        cnpj: "COLE_AQUI_O_NOME_DO_CAMPO",
        situacao: "COLE_AQUI_O_NOME_DO_CAMPO",
        grupo: "COLE_AQUI_O_NOME_DO_CAMPO"
      }
    }
  }

};
