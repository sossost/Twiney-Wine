import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { changeShippingStatusByOrderIndex } from "../../../api/api-order";

const ManageOrderListItem = (props) => {
  const {
    _id,
    totalPrice,
    orderIndex,
    buyer,
    buyerEmail,
    shippingRequest,
    shippingStatus,
    createdAt,
  } = props.order;

  const [newShippingStatus, setNewShippingStatus] = useState(shippingStatus);
  const [isChecked, setIsChecked] = useState(props.isCheckAll);

  useEffect(() => {
    setIsChecked(props.isCheckAll);
  }, [props.isCheckAll]);

  const orderStateChangeHandler = async (e) => {
    setNewShippingStatus(e.target.value);
    try {
      const result = await changeShippingStatusByOrderIndex(
        orderIndex,
        shippingStatus
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const inputCheckHandler = (e) => {
    if (!isChecked) {
      setIsChecked(true);
      let copiedArr = [...props.checkedOrderIndexes];
      copiedArr.push(orderIndex);
      props.setCheckedOrderIndexes(copiedArr);
    } else {
      setIsChecked(false);
      let copiedArr = [...props.checkedOrderIndexes];
      copiedArr.forEach((order_Index) => {
        if (order_Index === orderIndex) {
          copiedArr.splice(orderIndex, 1);
        }
      });
      console.log(copiedArr);
      props.setCheckedOrderIndexes(copiedArr);
    }
  };

  return (
    <li class="flex text-center items-center border-b border-color2 w-full h-12 py-1 gap-3 text-sm">
      <input type="checkbox" onClick={inputCheckHandler} checked={isChecked} />
      <span class="w-24 ">{orderIndex}</span>
      <span class="w-24 ">{buyerEmail.split("@")[0]}</span>
      <span class="w-24 ">{buyer}</span>
      <span class="w-24 ">{totalPrice}원</span>
      <select
        class="border h-7 w-24 border-color2"
        value={newShippingStatus}
        onChange={orderStateChangeHandler}
      >
        <option value="상품준비중">상품준비중</option>
        <option value="배송준비중">배송준비중</option>
        <option value="배송중">배송중</option>
        <option value="배송완료">배송완료</option>
      </select>

      <span class="flex-grow ">{shippingRequest}</span>
      <span class="w-32 ">{createdAt.slice(0, 10)}</span>
      <Link to={`/manage/order_manage/${buyerEmail}`} class="w-20 ">
        주문관리
      </Link>
    </li>
  );
};

export default ManageOrderListItem;