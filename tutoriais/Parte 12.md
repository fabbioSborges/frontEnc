# requisição na api

1. Alterar o arquivo de autorização

   ```javascript
   api.defaults.headers.authorization = `Bearer ${token}`;
   ```

2. Realizar a chamada na api

```javascript
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
  return agendamentos.filter((agenda) => {
    return parseISO(agenda.date).getHours() < 12;
  });
}, [agendamentos]);

const agendaTarde = useMemo(() => {
  return agendamentos.filter((agenda) => {
    return parseISO(agenda.date).getHours() >= 12;
  });
}, [agendamentos]);
```

3. Atualizar a section

```javascript

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

```
