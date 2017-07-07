function inject(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Person
{
    @inject
    who () {
        
    }
}