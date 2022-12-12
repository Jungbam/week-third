import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  todo: [],
};
const postSlice = createSlice({
  name: "todo",
  initialState: initial,
  reducers: {
    initialTodos: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      axios.post("http://localhost:3001/posts", action.payload);
      state.todo = [...state.todo, action.payload];
    },
  },
});

// 댓글 중간 미들웨어 thunk 로직처리가 필요
// 좋은 패턴일까? 
// 윤 매니저님 : 로직이 한군데에서 관리되서 유지보수에 용이하도록
//              thunk에서 관리되었을때 에러처리되었을 때
// form에 만들 수 있는 훅? : 유효성(value => 검사 => return [value, message])

export const { initialTodos, addTodo } = postSlice.actions;
export default postSlice.reducer;
