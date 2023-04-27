import { useNavigate } from "react-router-dom";
import BuyerInfo from "../../../components/user/order/buyer-info";
import BuyerPay from "../../../components/user/order/buyer-pay";

const OrderPage = (props) => {
  // 주문 취소시 이전 페이지로 이동시켜주는 핸들러
  const navigate = useNavigate();
  const orderCancelHandler = () => {
    navigate("../");
  };
  const orderCompleteHandler = () => {
    navigate("/ordercomplete");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 주문/결제 Title */}
        <div className="flex items-center mb-[20px] mt-[50px] mb-[50px]">
          <h1 className="text-[32px] font-[600]">주문/결제</h1>
        </div>

        {/* 주문자 정보, 배송 정보 */}
        {/* 자식 요소에서 가져와서 status 업데이트 */}
        <BuyerInfo />

        {/* 결제 금액 정보 */}
        <BuyerPay />

        {/* 취소, 주문하기 버튼 */}
        <div className="flex space-x-[15px]">
          {/* 취소 */}
          <div className="mb-[100px]">
            <button
              type="button"
              className="w-[200px] h-[60px] rounded-[10px] 
                bg-[#E5D1D1] text-[20px]"
              onClick={orderCancelHandler}
            >
              취소
            </button>
          </div>
          {/* 주문하기 */}
          <div className="mb-[100px]">
            <button
              type="button"
              className="w-[200px] h-[60px] rounded-[10px] 
      bg-[#7B4848] text-[20px] text-[#FFFFFF]"
              onClick={orderCompleteHandler}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
