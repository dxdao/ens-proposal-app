import BigNumber from 'bignumber.js';

// todo: get navigator declared somehow? probably an issue with using nextjs
// function getLang() {
//  if (window.navigator.languages != undefined)
//   return window.navigator.languages[0];
//  else
//   return window.navigator.language;
// }

export function formatCurrency(amount: number, decimals = 2) {
  if (!isNaN(amount)) {
    if (BigNumber(amount).gt(0) && BigNumber(amount).lt(0.01)) {
      return '< 0.01';
    }

    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

    return formatter.format(amount);
  } else {
    return 0;
  }
}

export function formatAddress(address: string, length = 'short') {
  if (address && length === 'short') {
    address = address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length);
    return address;
  } else if (address && length === 'long') {
    address = address.substring(0, 12) + '...' + address.substring(address.length - 8, address.length);
    return address;
  } else {
    return null;
  }
}

export function bnDec(decimals: string) {
  return new BigNumber(10).pow(parseInt(decimals));
}

export function multiplyBnToFixed(...args: any[]) {
  if (args.length < 3)
    throw new Error(
      'multiplyBnToFixed needs at least 3 arguments: first bn, second bn to multiply with first, and number of decimals.'
    );

  const decimals = args[args.length - 1];
  const bigNumbers = args.slice(0, -1);

  return bnToFixed(multiplyArray(bigNumbers), decimals * bigNumbers.length, decimals);
}

export function sumArray(numbers: number[]) {
  return numbers.reduce((total, n) => total + Number(n), 0);
}

export function bnToFixed(bn: number, decimals: number, displayDecimals = decimals) {
  const bnDecimals = new BigNumber(10).pow(decimals);

  return new BigNumber(bn).dividedBy(bnDecimals).toFixed(displayDecimals, BigNumber.ROUND_DOWN);
}

export function floatToFixed(float: string, decimals = 0) {
  return new BigNumber(float).toFixed(decimals, BigNumber.ROUND_DOWN);
}

export function multiplyArray(numbers: number[]) {
  return numbers.reduce((total, n) => total * n, 1);
}
