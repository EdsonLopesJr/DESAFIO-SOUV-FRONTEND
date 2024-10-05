import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Api } from "@/utils/api";

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  profile: string;
}

interface TestimonialContextProps {
  testimonials: Testimonial[];
  fetchTestimonials: () => void;
  loading: boolean;
}

export const TestimonialContext = createContext<
  TestimonialContextProps | undefined
>(undefined);

export const TestimonialProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await Api.get("/testimonials");
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <TestimonialContext.Provider
      value={{ testimonials, fetchTestimonials, loading }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(TestimonialContext);

  if (!context) {
    throw new Error("useService deve ser usado dentro de um ServiceProvider");
  }

  return context;
};
