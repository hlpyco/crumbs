export default interface Theme {
  readonly primary?: string;
  readonly secondary?: string;
  readonly error?: string;
  readonly grey?: string;

  readonly primaryLighten50?: string;
  readonly secondaryLighten50?: string;
  readonly errorLighten50?: string;
  readonly greyLighten50?: string;

  readonly primaryLighten30?: string;
  readonly secondaryLighten30?: string;
  readonly greyLighten30?: string;
}
