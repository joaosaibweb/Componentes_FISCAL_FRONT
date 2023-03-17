export function formatarMoeda(valor: string = ''): string {
  let v: string = String(valor).replace(/\D/g, '');

  v = (Number(v) / 100).toFixed(2).toString();

  v = v.replace('.', ',');

  v = v.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');

  v = v.replace(/(\d)(\d{3}),/g, '$1.$2,');
  return v;
}