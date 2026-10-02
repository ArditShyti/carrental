export function t(
    template: string,
    values: Record<string, string | number>
  ) {
    return template.replace(/\{(\w+)\}/g, (_, key) => {
      return values[key]?.toString() || "";
    });
  }