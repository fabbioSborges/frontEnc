import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FiClock } from 'react-icons/fi'

import {format, parseISO} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Cabecalho from '../../components/cabecalho'

import {Container, Section, ProximoAgendamento, Agendamento, Conteudo, Agenda, Calendario} from './styles'
import api from '../../services/api'

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function Dashboard(){

  const [dataSelecionada, setDataSelecionada] = useState(new Date())

  const [agendamentos, setAgendamento] = useState([]);

  useEffect(async () => {
    
    const response = await api.get("/agendaservico", {
      params: {
        date: dataSelecionada,
      },
    });
    setAgendamento(response.data);
    console.log(response.data);
  }, [dataSelecionada]);

  const agendaManha = useMemo(() => {
    return agendamentos.filter(agenda => {
      return parseISO(agenda.date).getHours() < 12
    })
  }, [agendamentos])

  const agendaTarde = useMemo(() => {
    return agendamentos.filter(agenda => {
      return parseISO(agenda.date).getHours() >= 12
    })
  }, [agendamentos])

  const funcaoDataSelecionada = useCallback((day, modifiers) => {
    if (modifiers.available) {
      setDataSelecionada(day);
    }
    console.log(day)
  }, []);

   const semanaToText = useMemo(() => {
    return format(dataSelecionada, "eeee", {
      locale: ptBR,
    });
  }, [dataSelecionada]); 

  const diaMesToText = useMemo(() => {
    return format(dataSelecionada, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [dataSelecionada]);

  return (
    <Container>
      <Cabecalho></Cabecalho>
      <Conteudo>
        <Agenda>
          <h1>Horarios Agendados</h1>
          <p>
            <span>{diaMesToText}</span>
            <span>{semanaToText}</span>
          </p>
          <ProximoAgendamento>
            <strong>Atendimento a Seguir</strong>
            <div>
              <img src="" alt="teste"></img>
              <strong>Fabbio borges</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </ProximoAgendamento>
          <Section>
            <strong> Manhã </strong>
            {agendaManha.map(agenda => {
              console.log(agenda)
              return(
                <Agendamento key={agenda.id}>
                  <span>
                    <FiClock> </FiClock>
                    {`${parseISO(agenda.date).getHours()} : 
                    ${parseISO(agenda.date).getMinutes()} `}
                  </span>
                  <div>
                    <img src={agenda.user.avatar.url} alt={`foto ${agenda.user.name}`} />
                    <strong>{agenda.user.name}</strong>
                  </div>
                </Agendamento>
              )
            })}
          </Section>
          <Section>
            <strong> Tarde </strong>
            {agendaTarde.map((agenda) => {
              return(
                <Agendamento key={agenda.id}>
                  <span>
                    <FiClock> </FiClock>
                    {parseISO(agenda.date).getHours()}
                  </span>
                  <div>
                    <img src={agenda.user.avatar.url} alt={`foto ${agenda.user.name}`} />
                    <strong>{agenda.user.name}</strong>
                  </div>
                </Agendamento>
              )
            })}
          </Section>
        </Agenda>
        <Calendario>
        <DayPicker
            weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            selectedDays={dataSelecionada}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={funcaoDataSelecionada}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
          ></DayPicker>
        </Calendario>
      </Conteudo>
    </Container>
  )
}

export default Dashboard