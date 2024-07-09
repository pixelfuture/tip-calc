import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [percent, setPercent] = useState("20%");
  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (Number.isNaN(Number(value))) {
      return;
    }
    setBillAmount(value);
  }
  function handlePercentChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPercent(value);
  }
  const tipPercent = Number(percent.slice(0, percent.length - 1)) / 100;
  console.log({ tipPercent });
  const tipAmount = Number(billAmount) * tipPercent;
  const tipAmountFormatted = tipAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalWithTip = (Number(billAmount) + Number(tipAmount)).toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" },
  );
  return (
    <>
      <div className="bill-amount">
        <label htmlFor="bill">Bill Amount</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            type="text"
            id="bill"
            aria-describedby="hint"
            inputMode="numeric"
            pattern="[0-9.]*"
            value={billAmount}
            onChange={changeHandler}
            placeholder="0.00"
            maxLength={8}
          />
        </div>
      </div>
      <h2 className="label">Tip Percentage</h2>
      <div className="tip-percent">
        <input
          type="radio"
          id="ten-percent"
          name="tip-percent"
          value="10%"
          checked={percent === "10%"}
          onChange={handlePercentChange}
        />
        <label htmlFor="ten-percent">10%</label>
        <input
          type="radio"
          id="fifteen-percent"
          name="tip-percent"
          value="15%"
          checked={percent === "15%"}
          onChange={handlePercentChange}
        />
        <label htmlFor="fifteen-percent">15%</label>
        <input
          type="radio"
          id="twenty-percent"
          name="tip-percent"
          value="20%"
          checked={percent === "20%"}
          onChange={handlePercentChange}
        />
        <label htmlFor="twenty-percent">20%</label>
        <input
          type="radio"
          id="twenty-five-percent"
          name="tip-percent"
          value="25%"
          checked={percent === "25%"}
          onChange={handlePercentChange}
        />
        <label htmlFor="twenty-five-percent">25%</label>
      </div>
      <div className="summary">
        <p>
          <span>Tip Amount</span> {tipAmountFormatted}
        </p>
      </div>
      <div className="summary">
        <p>
          <span>Total w/tip</span> {totalWithTip}
        </p>
      </div>
    </>
  );
}

export default App;
