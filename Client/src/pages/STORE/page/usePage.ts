import { useState } from "react";
import { useUser } from "../../../context/userContext";
import { useAuth } from "../../../context/authContext";
import type { Store } from "../../../@types/Entity";
import { Url } from "../../../helper/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const usePage = () => {
  const { user } = useUser();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [Allstores, setAllStores] = useState<Store[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStores, setFilteredStores] = useState(Allstores);
  const handleSearch = (query: any) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredStores([]);
    } else {
      const filteredStores = Allstores.filter((store) => {
        return (
          store?.storeName?.toLowerCase().includes(query.toLowerCase()) ||
          store?.description?.toLowerCase().includes(query.toLowerCase()) ||
          store?.category?.includes(query.toLowerCase())
        );
      });
      setFilteredStores(filteredStores);
    }
  };
  const getStores = async () => {
    if (!token || !user) return;
    try {
      const response = await axios.get(`${Url}stores`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data && Array.isArray(response.data)) {
        const { data } = await response;

        setAllStores(data);
      } else {
        console.error("Unexpected response data format");
      }
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };

  const gotoStorePage = (storeId: number) => {
    if (storeId) {
      navigate("/stores/page/" + storeId);
    }
  };
  return {
    getStores,
    token,
    user,
    Allstores,
    filteredStores,
    handleSearch,
    searchQuery,
    gotoStorePage,
  };
};
