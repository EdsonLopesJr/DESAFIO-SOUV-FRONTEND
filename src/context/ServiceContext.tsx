import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Api } from "@/utils/api";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ServiceContextProps {
  services: Service[];
  fetchServices: () => void;
  loading: boolean;
}

export const ServiceContext = createContext<ServiceContextProps | undefined>(
  undefined
);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await Api.get("/services");
      setServices(response.data.services);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services, fetchServices, loading }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error("useService deve ser usado dentro de um ServiceProvider");
  }

  return context;
};
