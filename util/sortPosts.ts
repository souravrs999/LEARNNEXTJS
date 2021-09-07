export function SortByDate(arr: any[]) {
  return arr.sort((a, b) => {
    var _ad: number = new Date(a.publishedAt).valueOf();
    var _bd: number = new Date(b.publishedAt).valueOf();
    return _ad - _bd;
  });
}
