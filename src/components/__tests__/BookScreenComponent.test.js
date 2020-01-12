import React from "react";
import { shallow } from 'enzyme';
import BookScreenComponent from '../BookScreenComponent';


describe('<BookScreenComponent />', () =>{
    let props = {
    "theaterlist":new Map().set("tt0848228",[
        {"name":"srinivasa Theater",
        "showtimes":["10:30 AM","1:30 PM","3:30 PM","9:30 PM"],
        "totalseats":10
        },
        {"name":"PVR Cinemas",
        "showtimes":["10:30 AM","1:30 PM","3:30 PM","9:30 PM"],
        "totalseats":10
        },
 
        {"name":"syatham Cinemas ",
        "showtimes":["10:30 AM","1:30 PM","3:30 PM","9:30 PM"],
        "totalseats":10
         }
        ]),
    "curSelectedMovie":{"imdbID":"tt0848228","Title":"The Avengers"}
    }
   
   test('BookScreenComponent > correctly renders componenet with the data ', () =>{
    const wrapper = shallow(<BookScreenComponent
            {...props}/>);
    expect(wrapper.html()).toContain('The Avengers')
   });
   
})

