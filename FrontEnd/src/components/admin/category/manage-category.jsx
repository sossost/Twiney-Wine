import { useState } from "react";
import CategoryManageForm from "./manage-category-form";
import uuid from "react-uuid";
import Button from "../../UI/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageCategory = (props) => {
  // const categoryBundle = props.categoryBundle;
  const [categoryBundle, setCategoryBundle] = useState(props.categoryBundle);
  const navigate = useNavigate();
  console.log(categoryBundle);

  const categoryPushHandler = (categoryBundleId, enteredNewCategory) => {
    const enteredNewCategoryId = enteredNewCategory.id;
    const enteredNewCategoryName = enteredNewCategory.name;

    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle.id === categoryBundleId
    );

    const newCategories = categoryBundle[index].categories.map((category) =>
      category.id === enteredNewCategoryId
        ? { ...category, name: enteredNewCategoryName }
        : category
    );

    const newBundle = categoryBundle.map((bundle) =>
      bundle.id === categoryBundleId
        ? { ...bundle, categories: newCategories }
        : bundle
    );

    setCategoryBundle(newBundle);

    // const findIndex = newCategoryBundle.findIndex(
    //   (category) => category.id === id
    // );
    // let copiedCategory = [...category];
    // copiedCategory[findIndex] = {
    //   ...category[findIndex],
    //   name: enteredCategory.name,
    // };
    // setCategory(copiedCategory);
  };

  const categoryDeleteHandler = (categoryBundleId, categoryId) => {
    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle.id === categoryBundleId
    );

    const editedcategories = copiedCategoryBundle[index].categories.filter(
      (category) => category.id !== categoryId
    );

    const newBundle = copiedCategoryBundle.map((bundle) =>
      bundle.id === categoryBundleId
        ? { ...bundle, categories: editedcategories }
        : bundle
    );

    setCategoryBundle(newBundle);
  };

  const categoryAddHandler = (e) => {
    e.preventDefault();
    let newArr = [...categoryBundle];
    newArr.map((bundle) => {
      if (bundle.id === +e.target.id) {
        bundle.categories.push({ id: uuid(), name: "" });
      }
    });
    setCategoryBundle(newArr);
  };

  const categorySaveHandler = async (event) => {
    event.preventDefault();

    console.log(categoryBundle);
    if (
      categoryBundle.filter((bundle) => bundle.categories.length < 1).length > 0
    ) {
      alert("카테고리를 최소 한개 입력해주세요.");
      return;
    }

    console.log(
      categoryBundle.filter((bundle) => {
        return (
          bundle.categories.filter((category) => {
            return category.name.trim().length === 0;
          }).length !== 0
        );
      })
    );
    if (
      categoryBundle.filter((bundle) => {
        return (
          bundle.categories.filter((category) => {
            return category.name.trim().length === 0;
          }).length !== 0
        );
      }).length !== 0
    ) {
      alert("카테고리 이름에 빈곳이 있습니다.");
      return;
    }
    try {
      const result = await axios.post("http://34.22.85.44/api/cateogries", {});
      console.log(result);
      alert("카테고리가 성공적으로 저장되었습니다.");
      navigate("/manage/category");
    } catch (error) {
      console.log(error);
    }
    alert("카테고리 저장이 완료되었습니다.");

    // for (let i = 0; i < categories.length; i++) {
    //   if (category[i]) {
    //     // changeCategoryOfArticles(userId, categories[i].name, category[i].name);
    //   }
    // }
  };

  return (
    <div class="flex w-full p-6">
      <div class="flex flex-col bg-[#ffffff] px-8 py-4 min-h-[500px] border border-color2">
        <div class="grid grid-cols-2 gap-10">
          {categoryBundle.map((bundle) => {
            return (
              <div key={uuid()} class="flex flex-col w-[400px] text-sm">
                <div class="h-12 flex gap-10 justify-between items-center border-b border-color2 ">
                  <div class="flex items-center font-bold text-lg px-1">
                    {bundle.title}
                  </div>
                  {/* <div class="flex gap-2 px-1">
                    <button
                      class="py-1 px-3 "
                      // onClick={categoryEditHandler}
                    >
                      수정
                    </button>
                    <button
                      class="py-1 px-3 "
                      // onClick={categoryDeleteHandler}
                    >
                      삭제
                    </button>
                  </div> */}
                </div>

                <ul>
                  {bundle.categories.map((category) => {
                    return (
                      <CategoryManageForm
                        key={category.id}
                        categoryPushHandler={categoryPushHandler}
                        categoryDeleteHandler={categoryDeleteHandler}
                        categoryBundleId={bundle.id}
                        categoryId={category.id}
                        categoryName={category.name}
                      />
                    );
                  })}
                </ul>
                <div class="flex justify-end h-12 items-center px-1">
                  <button id={bundle.id} onClick={categoryAddHandler}>
                    카테고리 추가
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div class="flex justify-end">
          <div onClick={categorySaveHandler}>
            <Button isConfirm={true}>저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;