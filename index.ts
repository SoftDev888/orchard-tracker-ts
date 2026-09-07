export function isMirror(text: string): boolean {
  const folded = [...text.toLowerCase()].filter((one) => /[a-z0-9]/.test(one));
  return folded.join('') === folded.reverse().join('');
}

console.log(isMirror('Never odd or even'));
