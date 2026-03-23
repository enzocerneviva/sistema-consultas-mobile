import type { Medico } from "./medico";
import type { Paciente } from "../types/paciente";
import type { StatusConsulta } from "../types/statusConsulta";
import type { HistoricoStatus } from "../types/historicoStatus";

export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  historico: HistoricoStatus[];
  observacoes?: string;
}