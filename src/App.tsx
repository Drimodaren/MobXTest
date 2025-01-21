import { Button, TextField } from "@mui/material";
import style from "./App.module.scss";
import counter from "./store/cointer";
import { observer } from "mobx-react-lite";

const App = observer(() => {

  return (
    <div className={style.App}>
      <div className={style.buttonGroup}>
        <Button onClick={() => counter.increment()}>Increment</Button>
        <Button onClick={() => counter.decrement()}>Decrement</Button>
      </div>
      <TextField disabled size="small" label={counter.count} />
    </div>
  )
})

export default App
