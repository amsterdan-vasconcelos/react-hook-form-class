export function formatCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length > 11) cpf = cpf.substring(0, 11);

  if (cpf.length <= 3) {
    return cpf;
  }
  if (cpf.length <= 6) {
    return cpf.replace(/(\d{3})(\d{0,3})/, "$1.$2");
  }
  if (cpf.length <= 9) {
    return cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  }
  if (cpf.length <= 11) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  }

  return cpf;
}

export function formatCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length > 14) cnpj = cnpj.substring(0, 14);

  if (cnpj.length <= 2) {
    return cnpj;
  }
  if (cnpj.length <= 5) {
    return cnpj.replace(/(\d{2})(\d{0,3})/, "$1.$2");
  }
  if (cnpj.length <= 8) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
  }
  if (cnpj.length <= 12) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
  }
  if (cnpj.length <= 14) {
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/,
      "$1.$2.$3/$4-$5"
    );
  }

  return cnpj;
}
