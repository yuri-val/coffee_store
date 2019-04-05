export const formatSum = (sum, currency = '') => [parseFloat(sum).toFixed(2), currency].join(' ')
