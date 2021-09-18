export function SortByDate(arr: any[]) {
  return arr.sort((a, b) => {
    var _ad: number = new Date(a.publishedAt).valueOf();
    var _bd: number = new Date(b.publishedAt).valueOf();
    return _ad - _bd;
  });
}

export function SortByDateDesc(arr: any[]) {
  return arr.sort((a, b) => {
    var _ad: number = new Date(a.publishedAt).valueOf();
    var _bd: number = new Date(b.publishedAt).valueOf();
    return _bd - _ad;
  });
}

export function SortByViews(arr: any[]) {
  return arr.sort((a, b) => {
    var _av: number = a.views;
    var _bv: number = b.views;
    return _bv - _av;
  });
}
