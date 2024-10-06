import { Api } from "@/utils/api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  services: Service[];
  timestamp: Date;
}

export interface AppointmentCreate {
  name: string;
  phone: string;
  serviceIds: string[];
  timestamp: Date;
}

export interface Service {
  id: string;
  name: string;
}

export interface AppointmentContextProps {
  appointments: Appointment[];
  fetchAppointments: () => void;
  createAppointment: (newAppointment: AppointmentCreate) => void;
  loading: boolean;
}

export const AppointmentContext = createContext<
  AppointmentContextProps | undefined
>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await Api.get("/calendars");
      setAppointments(response.data.calendars);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const createAppointment = async (newAppointment: AppointmentCreate) => {
    try {
      setLoading(true);
      await Api.post("/calendar", newAppointment);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      fetchAppointments();
    }
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, fetchAppointments, createAppointment, loading }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointment deve ser usado dentro de um AppointmentProvider"
    );
  }

  return context;
};
