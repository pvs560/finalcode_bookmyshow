import React from 'react';
import renderer from 'react-test-renderer';

import Moviecard from '../Moviecard';
import MovieList from '../../JsonData/movielist';

describe('MovieComponent',()=>{
    test('sanpshot renders', ()=>{
        const component = renderer.create(<Moviecard movielist={MovieList.movielist} handleBookNow={()=>{}}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});