// a + b = 12;
console.log('useFull');
loadScript('js/a.js', () => {
    console.log('from useFull -> a', a);
});
loadScript('js/b.js', () => {
    let b = 100;
    console.log('from useFull -> b', b + a);
});