export type TranslationValue = string | { [key: string]: TranslationValue };

export type TranslationKeys<
  T extends TranslationValue,
  Prefix extends string = '',
> = T extends string
  ? T
  : {
      [Key in keyof T]: Key extends string
        ? T[Key] extends string
          ? `${Prefix}${Key}`
          : T[Key] extends TranslationValue
            ? TranslationKeys<T[Key], `${Prefix}${Key}.`>
            : never
        : never;
    }[keyof T];
