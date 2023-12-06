    import { configureStore, createSlice } from "@reduxjs/toolkit";

    let user = createSlice({
    name: "user",
    initialState: { name: "Crystal" },
    reducers: {
        changeName(state) {
        state.name = "park";
        },

        //state  변경함수를   action이라고 함
        increase(state, action) {
        state.age += action.payload;
        },
    },
    });

    //   increase(10)
    //   increase(100)

    export let { changeName, increase } = user.actions;

    let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 1, imgurl: "..//img/sub_page/SubImgDetail/001/detail01.jpg", name: "우먼 숏 리버시블 다운 베스트 라벤더", count: 2 },
        { id: 2, imgurl: "..//img/sub_page/SubImgDetail/002/detail01.jpg", name: "우먼 RDS 씨빅 숏 푸퍼 버터", count: 1 },
        { id: 3, imgurl: "..//img/sub_page/SubImgDetail/003/detail01.jpg", name: "우먼 숏 더플 코트 라이트 그레이", count: 1 },
    ],
    reducers: {
        addCount(state, action) {
        let num = state.findIndex((a) => {
            return a.id === action.payload;
        });
        console.log(num);
        console.log("내가 선택한 상품" + action.payload);
        console.log("내가 추가한 상품아이디는" + state[num].id);
        console.log("내가 추가한 상품갯수는" + state[num].count);

        state[num].count++;
        },
        decreaseCount(state, action) {
        let num = state.findIndex((a) => {
            return a.id === action.payload;
        });
        console.log(num);
        if (state[num].count > 0) {
            state[num].count--;
        } else if (state[num].count === 0) {
            alert("상품이 더 이상 없습니다.");
        }
        },
        addItem(state, action) {
        let num = state.findIndex((a) => a.id === action.payload.id);
        if (num !== -1) {
            state[num].count++;
        } else {
            state.push(action.payload);
        }
        },

        deleteItem(state, action) {
        let num = state.findIndex((a) => {
            return a.id === action.payload;
        });
        state.splice(num, 1);
        },
        sortName(state, action) {
        state.sort((a, b) => (a.title > b.title ? 1 : -1));
        },
    },
    });

    // addCount(1)

    export let { addCount, decreaseCount, addItem, deleteItem, sortName } =
    cart.actions;

    export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
    });
