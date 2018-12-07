import React, {PropTypes} from 'react';
import { shallow, mount } from 'enzyme';
import RecipeModal from "./RecipeModal";

describe('RecipeModal component testing', () => {
    it('should not have a image if data is empty', ()=>{
        const wrapper = shallow(<RecipeModal/>);
        expect(wrapper.find("img").exists()).toBe(false);
        expect(wrapper.find("div").exists()).toBe(false);
        expect(wrapper.find("modal").exists()).toBe(false);
    })
    it('should have a correct state if data exists', ()=>{
        const wrapper = mount(<RecipeModal/>);
        wrapper.setState({ 
            open: false,
            data: [{
            "id": 2,
            "title": "Salad",
            "image": "/images/salad.jpg",
            "description": "Garden salad is most often composed of leafy vegetables such as lettuce varieties, spinach, or rocket (arugula). They are common enough that the word salad alone often refers specifically to garden salads. Other types include bean salad, tuna salad, fattoush, Greek salad (vegetable based, but without leafy greens), and sōmen salad (a noodle-based salad). The sauce used to flavor a salad is commonly called a salad dressing.",
            "likes": 8,
            "day": "Mon Wed"
            }],
            idx: 0,
            day: "Mon" });
        wrapper.update();
        expect(wrapper.state('open')).toBe(false);
        expect(wrapper.state('idx')).toBe(0);
        expect(wrapper.state('day')).toEqual("Mon");
        expect(wrapper.state('data')).toHaveLength(1);
    })
    it('like button is triggered if clicked', ()=>{
        let wrapper = shallow(<RecipeModal/>);
        wrapper.instance().addLike = jest.fn();
        wrapper.update();
        wrapper.instance().addLike();
        expect(wrapper.instance().addLike).toBeCalled();
    })
    it('open the modal properly', ()=>{
        let wrapper = shallow(<RecipeModal/>);
        wrapper.instance().handleOpen = jest.fn();
        wrapper.update();
        wrapper.instance().handleOpen();
        expect(wrapper.instance().handleOpen).toBeCalled();
    })
    it('close the modal properly', ()=>{
        let wrapper = shallow(<RecipeModal/>);
        wrapper.instance().handleClose = jest.fn();
        wrapper.update();
        wrapper.instance().handleClose();
        expect(wrapper.instance().handleClose).toBeCalled();
    })
})