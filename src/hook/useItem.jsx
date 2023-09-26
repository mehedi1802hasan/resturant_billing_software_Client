import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";
const useItem = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/menu');
          return res.json();
        }
      });
      return [menu, loading, refetch];
  }
  
export default useItem;