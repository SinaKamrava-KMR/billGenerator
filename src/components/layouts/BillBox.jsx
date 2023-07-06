import BillPrice from "../common/BillPrice";
import Button from "../common/Button";
import OffInput from "../common/OffInput";
import Price from "../common/Price";

export default function BillBox() {

  return <section className="bill-box">

    <BillPrice>
      <Price price={"۱۰۰۰"}/>
      <p>:جمع کل سفارشات</p>
    </BillPrice>

    <BillPrice>
      <Price price={"۱۰۰۰"}/>
      <p> :حق سرویس و کارمزد </p>
    </BillPrice>

    <BillPrice>
      <Price price={"۱۰۰۰"} currency="درصد"/>
      <p> :تخفیف</p>
    </BillPrice>

    <OffInput/>

    <span className="flex1"></span>

    <div className="bg-yellow">
    <BillPrice>
      <Price price={"۱۰۰۰"}/>
      <p> :مبلق قابل پرداخت</p>
    </BillPrice>
    </div>

    <Button pd={10}>
      ثبت سفارش
    </Button>

  </section>;
}
