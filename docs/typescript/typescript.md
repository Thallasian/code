So what is typescript?

Well, typescript is javascript but with the addition of types.

What are types?

A type is a collection of properties and or methods.

As an example. A dog can bark, a dog has an age. A dog is of a specific breed.
A dog is biologically related to atleast two other dogs. The dogs parents.

In code this could look something like this:
```
class Dog {
  age: number;
  breed: Breed;
  family: Dog[];
}

``` (defining a class of Dog, a template for what dogs can look like)

You can instantiate (make an object) out of this class like so

```
const shib = new Dog();
shib.age = 15;
shib.breed = 'shiba inu';
shib.family = []; // This dog has no family
```

You can also define types using values instead of building objects.
This looks like:
```
type Breed = 'shiba inu' | 'akita inu' | 'doge'
```

Accepted valued for a member field or variable of type **Breed**, is only the ones defined above.


Some benefits to having a type system is that it becomes easier to reason about code. Another big point of it is catching errors before they are made. Your development environment can use this information aswell in *static type checking*. Allowing to you to catch errors before they are made.
