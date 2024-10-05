import Link from "next/link";
import React from "react";

export default function Appointment() {
  return (
    <div>
      <h1>Agendar um Horário</h1>
      <Link href="/" passHref>
        Voltar
      </Link>
    </div>
  );
}
