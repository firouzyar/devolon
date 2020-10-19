import React from "react";
import { mount } from "enzyme";
import Landing from "./Landing";
import Loader from "../../components/Loader/Loader";
import CategoryImages from "./Reducer";
import {SET_CATEGORY_IMAGES,SET_LIMIT,RESET_SET_LIMIT} from "../../Types/Types"
import createStore from "../../Store";
const store = createStore();
import { Provider } from "react-redux";
describe("Landing component", () => {
  describe("testing Landing reducer",()=>{
    it("should return default state",()=>{
      const newState = CategoryImages(undefined,{});
      expect(newState).toEqual({"categoryImages": [], "limit": 10, "loading": true})
    })
    it("should return new state if reciving type set images",()=>{
      const data=[{
        "id": "8ja",
        "url": "https://cdn2.thecatapi.com/images/8ja.jpg",
        "width": 4320,
        "height": 2880
        },
        {
        "id": "ai6",
        "url": "https://cdn2.thecatapi.com/images/ai6.jpg",
        "width": 720,
        "height": 960
        },]
      const newState = CategoryImages(undefined,{
        type:SET_CATEGORY_IMAGES,
        data
      });
      expect(newState).toEqual({"categoryImages":data, "limit": 10, "loading": false})
    })
    it("should return new state if reciving type set limit:limit must be 20",()=>{
      const newState = CategoryImages(undefined,{
        type:SET_LIMIT,
      });
      expect(newState).toEqual({"categoryImages":[], "limit": 20, "loading": false})
    })
    it("should return new state if reciving type reset limit:limit must be 10",()=>{
      const newState = CategoryImages(undefined,{
        type:RESET_SET_LIMIT,
      });
      expect(newState).toEqual({"categoryImages":[], "limit": 10, "loading": true})
    })

  })

  describe("testing landing markup without props",()=>{
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <Landing />
        </Provider>
      );
    });
    it("render landing component without crashing", () => {
      expect(wrapper).not.toBeNull();
    });
    it("should render h1 with All text in it", () => {
      expect(wrapper.find("h1").text()).toEqual("All");
    });
    it("should render loading with no props", () => {
      expect(wrapper.find(Loader)).toHaveLength(1)
    });
  })
});
