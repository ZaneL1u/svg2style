import svg2style from '../src/index';

// svg2style
test('svg2style', () => {
    const foo = svg2style('<svg><path d="M0 0 L0 100 L100 100 L100 0 Z" fill="#FF0000"/></svg>')
    expect(foo).toBe(`data:image/svg+xml,%3Csvg width='' height='' viewBox='' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L0 100 L100 100 L100 0 Z' fill='%23ff0000'/%3E%3C/svg%3E`);
});