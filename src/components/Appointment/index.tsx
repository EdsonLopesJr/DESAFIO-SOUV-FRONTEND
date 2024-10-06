import { useState } from "react";
import * as S from "./appointiment.styled";
import {
  AppointmentCreate,
  useAppointment,
  Appointment as IAppointment,
} from "@/context/AppointimentContext";
import { useService } from "@/context/ServiceContext";
import { ListItem } from "./ListItem";

export const Appointment: React.FC = () => {
  const { createAppointment, appointments, loading } = useAppointment();
  const { services, loading: serviceLoading } = useService();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Cria o agendamento com os valores do formulário
    const newAppointment: AppointmentCreate = {
      name,
      phone,
      serviceIds: selectedServiceIds,
      timestamp: new Date(date),
    };

    await createAppointment(newAppointment);

    // Limpa os campos após o envio
    setName("");
    setPhone("");
    setSelectedServiceIds([]);
    setDate("");
  };

  const handleServiceChange = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <S.Wrapper>
      <h1>Agendamento</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <S.GroupForm>
          <S.Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
            required
          />
          <S.Input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </S.GroupForm>

        {/* Checkboxes para serviços */}
        {/* Checkboxes para serviços */}
        <S.CheckboxGroup>
          {!serviceLoading &&
            services.map((service) => (
              <S.CheckboxLabel key={service.id}>
                <S.CheckboxInput
                  checked={selectedServiceIds.includes(service.id)}
                  onChange={() => handleServiceChange(service.id)}
                />
                {service.name}
              </S.CheckboxLabel>
            ))}
        </S.CheckboxGroup>

        <S.Button type="submit" disabled={loading}>
          {loading ? "Agendando..." : "Agendar"}
        </S.Button>
      </S.Form>

      <h2>Lista de Agendamentos</h2>
      {appointments.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        appointments
          .sort(
            (a, b) =>
              new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
          )
          .map((appointment: IAppointment) => (
            <ListItem
              key={appointment.id}
              name={appointment.name}
              phone={appointment.phone}
              service={appointment.services.map((s) => s.name).join(", ")}
              date={new Date(appointment.timestamp).toLocaleString()}
            />
          ))
      )}
    </S.Wrapper>
  );
};
