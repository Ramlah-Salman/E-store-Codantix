export function money(n){
  return new Intl.NumberFormat(undefined,{ style:"currency", currency:"USD"}).format(n);
}