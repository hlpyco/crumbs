export default interface IconProvider {
  readonly cdn?: string;
  readonly name?: string;
  readonly prefix?: string;
  readonly separator?: string;
  readonly isDefault?: boolean;
  readonly families?: string[];
  readonly crossOrigin?: string;
}
