import {
    addOneNewsPagePath,
    editOneNewsPagePath, mainPagePath,
    noMatchPagePath,
    oneNewsPagePath,
    PAGE_PATHS,
    userPagePath
} from '../paths';

describe('PATHS: CHECK FUNCTIONS', () => {
    it('-- noMatchPath return right path', () => {
        expect(noMatchPagePath()).toEqual('/404')
    });

    it('-- addOneNewsPagePath return right path', () => {
        expect(addOneNewsPagePath()).toEqual(PAGE_PATHS.ADD_ONE_NEWS);
    });

    it('-- editOneNewsPagePath return right path', () => {
        expect(editOneNewsPagePath('id')).toEqual('/editOneNews/id');
    });

    it('-- userPagePath return right path', () => {
        expect(userPagePath()).toEqual(PAGE_PATHS.USER);
    });

    it('-- oneNewsPagePath return right path', () => {
        expect(oneNewsPagePath('id')).toEqual('/news/id');
    });

    it('-- userPagePath return right path', () => {
       expect(userPagePath()).toEqual(PAGE_PATHS.USER);
    });

    it('--empty mainPagePath return right path', ()=>{
       expect(mainPagePath()).toEqual(PAGE_PATHS.MAIN);
    });

    it('-- mainPagePath with tag return right path', ()=>{
       expect(mainPagePath('tagValue')).toEqual('/?tag=tagValue')
    });

});