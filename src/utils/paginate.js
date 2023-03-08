import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  const startIndex = pageSize * (pageNumber - 1);
  return _(items).slice(startIndex).take(pageSize).value();
}
