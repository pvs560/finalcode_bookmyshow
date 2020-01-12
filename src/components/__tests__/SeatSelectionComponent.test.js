import React from 'react';
import renderer from 'react-test-renderer';

import {SeatSelectionComponent} from '../SeatSelectionComponent';

describe('SeatSelectionComponent',()=>{
    test('sanpshot renders', ()=>{
        let props ={
            "show":false, 
            "onHide":()=>{},
            "headername":"testmovieheader",
            "movieid":"testid", 
            "popupbody":"testpopupbody", 
            "footer":"testBook"
        };
        const component = renderer.create(<SeatSelectionComponent {...props}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});