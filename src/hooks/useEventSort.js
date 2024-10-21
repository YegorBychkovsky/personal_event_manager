import { useState, useMemo } from "react";

export const useEventSort = (events) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortedEvents = useMemo(() => {
    let sortedList = [...events];
    if (sortConfig.key) {
      sortedList.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedList;
  }, [events, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { sortedEvents, requestSort, sortConfig };
};
