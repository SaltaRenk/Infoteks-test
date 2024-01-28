import { useMemo, useState } from 'react';

//хук для фильтрации данных в таблице
const useSortableData = (items) => {
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'});
    const [resetCount, setResetCount] = useState(0);
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig.key !== null) {
        sortableItems.sort((a, b) => {
          if (sortConfig.key === 'age') {
            return (sortConfig.direction === 'ascending' ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key]);
          } 
          if (sortConfig.key === 'address') {
            return a[sortConfig.key].city.localeCompare(b[sortConfig.key].city);
          } else {
            return a[sortConfig.key].localeCompare(b[sortConfig.key]);
          }
        });
        if (sortConfig.direction === 'descending') {
          sortableItems.reverse();
        }
      }
      return resetCount % 3 === 0 ? items : sortableItems;
    }, [items, sortConfig, resetCount]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
      setResetCount(prevCount => prevCount + 1);
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };
  
  export default useSortableData;