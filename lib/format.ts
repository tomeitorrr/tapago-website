// es-AR money formatting: thousands ".", decimals ",".

export function formatNumber(value: number, decimals = 0) {
  return value.toLocaleString("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function formatArs(value: number, decimals = 0) {
  return `ARS ${formatNumber(value, decimals)}`
}

export function formatUsd(value: number, decimals = 2) {
  return `USD ${formatNumber(value, decimals)}`
}
