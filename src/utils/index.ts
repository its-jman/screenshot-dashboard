export const arrayToObject = <T extends { id: string }>(
  inp: T[],
  key: keyof T = "id"
) => {
  return inp.reduce((mapped: { [key: string]: T }, item: T) => {
    mapped[item.id] = item;
    return mapped;
  }, {});
};

export const getClassNames = (...names: Array<string | undefined | null>) => {
  return names.filter((name) => !!name).join(" ");
};
