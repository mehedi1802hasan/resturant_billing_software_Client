import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";
const useItem = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
          const res = await fetch('https://resturant-server-gray.vercel.app/menu');
          return res.json();
        }
      });
      return [menu, loading, refetch];
  }
  
export default useItem;