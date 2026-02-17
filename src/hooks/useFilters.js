// src/hooks/useFilters.js

import { useState, useMemo } from "react";

export const useFilters = (items = []) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category
        ? item.category === category
        : true;

      const matchesMinPrice = minPrice
        ? item.price >= Number(minPrice)
        : true;

      const matchesMaxPrice = maxPrice
        ? item.price <= Number(maxPrice)
        : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [items, search, category, minPrice, maxPrice]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    filteredItems,
  };
};
