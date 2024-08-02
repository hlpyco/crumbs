export function document(element: Array<string> | Record<string, boolean> | Object): string {
  let elements: any[] = [];

  if (Array.isArray(element)) {
    elements = element;
  } else {
    elements = Object.values(element);
  }

  return elements.map((e) => `**${e}**`).join(', ');
}

export function documentCode(code: string | Array<string>): string {
  const codes = Array.isArray(code) ? code : [code];
  return codes.map((c) => `\`${c}\``).join(', ');
}

export function documentRange(min: number, max: number): string {
  return `from ${min} to ${max}`;
}
