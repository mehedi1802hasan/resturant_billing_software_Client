import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";
const useItem = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
          const res = await fetch('https://resturant-server-o7tc2ddyw-mehedi1802hasan.vercel.app/menu');
          return res.json();
        }
      });
      return [menu, loading, refetch];
  }
  
export default useItem;