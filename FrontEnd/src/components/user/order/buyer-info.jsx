import { useState } from "react";
import PopupDom from "../my-page-component/PopupDom";
import OrderPostCode from "./order-post-code";

// 주문자 정보, 배송 정보
const BuyerInfo = (props) => {
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhoneNumber, setBuyerPhoneNumber] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingExtraAddress, setShippingExtraAddress] = useState("");
  const [shippingRequest, setShippingRequest] = useState("");

  const data = 

  // 주문자 이름 입력값 업데이트 핸들러
  const buyerInputHandler = ({ target: { value } }) => {
    return setBuyerName(value);
  };

  // 주문자 이메일 입력값 업데이트 핸들러
  const buyerEmailInputHandler = ({ target: { value } }) => {
    return setBuyerEmail(value);
  };

  // 연락처 입력값 업데이트 핸들러
  const buyerPhoneNumberInputHandler = ({ target: { value } }) => {
    return setBuyerPhoneNumber(value);
  };

  // 수령인 입력값 업데이트 핸들러
  const recipientNameInputHandler = ({ target: { value } }) => {
    return setRecipientName(value);
  };

  // 수령인 전화번호 입력값 업데이트 핸들러
  const recipientPhoneNumberInputHandler = ({ target: { value } }) => {
    return setRecipientPhoneNumber(value);
  };

  // 상세 주소 입력값 업데이트 핸들러
  const shippingExtraAddressInputHandler = ({ target: { value } }) => {
    return setShippingExtraAddress(value);
  };

  // 배송 메시지 업데이트 핸들러
  const shippingRequestInputHandler = ({ target: { value } }) => {
    return setShippingRequest(value);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center mb-[25px]">
        {/* 주문자 정보 (이름, 이메일, 연락처) */}
        <div className="mb-[30px]">
          <div className="flex w-[650px] pb-[10px] mb-[25px] border-b-[#E5D1D1] border-b-[4px]">
            <span className="text-[22px] font-[600]">주문자 정보</span>
          </div>
          <ul className="flex flex-col">
            {/* 주문자 이름 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">이름</span>
              <input
                type="text"
                name="buyerName"
                placeholder="주문자 이름을 입력해주세요"
                onChange={buyerInputHandler}
                value={buyerName}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 주문자 이메일 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">이메일</span>
              <input
                type="email"
                name="buyerEmail"
                placeholder="주문자 이메일을 입력해주세요"
                value={buyerEmail}
                onChange={buyerEmailInputHandler}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 주문자 연락처 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">연락처</span>
              <input
                type="tel"
                name="buyerPhoneNumber"
                placeholder="주문자 연락처를 입력해주세요"
                onChange={buyerPhoneNumberInputHandler}
                value={buyerPhoneNumber}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>
          </ul>
        </div>

        {/* 배송 정보 (이름, 연락처, 배송지, 요청사항) */}
        <div>
          <div className="flex w-[650px] pb-[10px] mb-[25px] border-b-[#E5D1D1] border-b-[4px]">
            <span className="text-[22px] font-[600]">배송 정보</span>
          </div>
          <ul className="flex flex-col">
            {/* 수령인 이름 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">받는 사람</span>
              <input
                type="text"
                name="recipientName"
                placeholder="수령인 이름을 입력해주세요"
                onChange={recipientNameInputHandler}
                value={recipientName}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 수령인 연락처 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">연락처</span>
              <input
                type="tel"
                name="recipientPhoneNumber"
                placeholder="수령인 연락처를 입력해주세요"
                onChange={recipientPhoneNumberInputHandler}
                value={recipientPhoneNumber}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 배송지 (우편번호 찾기) */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">배송지</span>

              {/* 우편번호 찾기로 찾은 주소가 들어가는 칸 */}
              <div className="flex">
                <p
                  class="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[540px] h-[45px] mb-[25px] mr-[10px]
              focus:outline-[#AA7373] focus:outline-[2px]"
                >
                  {shippingAddress}
                </p>
                <button
                  class="bg-[#7B4848] rounded-[10px] w-[100px] h-[45px] text-[#FFFFFF]"
                  type="button"
                  onClick={openPostCode}
                >
                  우편번호 찾기
                </button>
              </div>
              <div id="popupDom">
                {isPopupOpen && ( // 클릭해서 true면 팝업 띄움.
                  <PopupDom>
                    <OrderPostCode
                      onClose={closePostCode} //팝업닫음.
                      setFullAddress={setShippingAddress} //받아온 data.address를 address에 setAddress로 설정.
                    />
                  </PopupDom>
                )}
              </div>
            </li>

            {/* 상세주소 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">상세주소</span>
              <input
                type="text"
                name="shippingExtraAddress"
                placeholder="상세주소를 입력해주세요"
                onChange={shippingExtraAddressInputHandler}
                value={shippingExtraAddress}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 배송 요청사항 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">요청사항</span>
              <input
                type="text"
                name="shippingRequest"
                placeholder="배송 요청사항을 입력해주세요"
                onChange={shippingRequestInputHandler}
                value={shippingRequest}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
