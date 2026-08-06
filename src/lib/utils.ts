type ClassValue =
  | string
  | false
  | null
  | undefined
  | ((props: any) => string | undefined);

export function cn(...classes: ClassValue[]) {
  return classes
    .map((value) =>
      typeof value === "function" ? value({}) : value
    )
    .filter(Boolean)
    .join(" ");
}
