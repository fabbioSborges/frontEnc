# trabalhar com data

1. adicionar a biblioteca calendario
   ` yarn add react-day-picker`

```
  import DayPicker from "react-day-picker";
  import "react-day-picker/lib/style.css";
```

2.Adicionar a tag do calendario

```javascript
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
```

3. Adicionar a função para selecionar as datas e carregar a data

```javascript
const [dataSelecionada, setDataSelecionada] = useState(new Date());

const funcaoDataSelecionada = useCallback((day, modifiers) => {
  if (modifiers.available) {
    setDataSelecionada(day);
  }
}, []);

const semanaToText = useMemo(() => {
  return format(dataSelecionada, "EEEE", {
    locale: ptBR,
  });
}, [dataSelecionada]);
```
