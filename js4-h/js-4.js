var biografy =
{
    name: 'John',
    lastname: 'Black',
    age: 23
}
for (var [key, value] of Object.entries(biografy)) {
    console.log(`${key} : ${value}`);
}