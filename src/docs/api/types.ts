import { SupportedLocale } from '../../locale';

export type ApiDoc = {
  name: string;
  desc?: string | Record<SupportedLocale, string>;
  props: ReadonlyArray<{
    name: string;
    type: string;
    defaultVal?: string | number | null;
    isOptional?: boolean;
    desc?: string | Partial<Record<SupportedLocale, string>>;
    format?: ReadonlyArray<string>;
    examples?: ReadonlyArray<{
      name: string;
      url: string;
      isExternal?: boolean;
    }>;
  }>;
  parentComponents?: ReadonlyArray<string>;
  childrenComponents?: ReadonlyArray<string>;
};
