export default interface Theme {
  readonly primary?: string;
  readonly primaryLighten5?: string;
  readonly primaryLighten4?: string;
  readonly primaryLighten3?: string;
  readonly primaryLighten2?: string;
  readonly primaryLighten1?: string;
  readonly primaryDarken1?: string;
  readonly primaryDarken2?: string;
  readonly primaryDarken3?: string;
  readonly primaryDarken4?: string;
  readonly primaryDarken5?: string;

  readonly secondary?: string;
  readonly secondaryLighten5?: string;
  readonly secondaryLighten4?: string;
  readonly secondaryLighten3?: string;
  readonly secondaryLighten2?: string;
  readonly secondaryLighten1?: string;
  readonly secondaryDarken1?: string;
  readonly secondaryDarken2?: string;
  readonly secondaryDarken3?: string;
  readonly secondaryDarken4?: string;
  readonly secondaryDarken5?: string;

  readonly error?: string;
  readonly errorLighten5?: string;
  readonly errorLighten4?: string;
  readonly errorLighten3?: string;
  readonly errorLighten2?: string;
  readonly errorLighten1?: string;
  readonly errorDarken1?: string;
  readonly errorDarken2?: string;
  readonly errorDarken3?: string;
  readonly errorDarken4?: string;
  readonly errorDarken5?: string;

  readonly grey?: string;
  readonly greyLighten5?: string;
  readonly greyLighten4?: string;
  readonly greyLighten3?: string;
  readonly greyLighten2?: string;
  readonly greyLighten1?: string;
  readonly greyDarken1?: string;
  readonly greyDarken2?: string;
  readonly greyDarken3?: string;
  readonly greyDarken4?: string;
  readonly greyDarken5?: string;

  readonly black?: string;
  readonly white?: string;
}
