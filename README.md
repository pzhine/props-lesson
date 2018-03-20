# React Lesson: Using props

## Purpose

In this lesson, you will learn how to pass data between React components using props.

## Prerequisites

This lesson assumes you have already completed the *State and setState*,
*Events and event handlers*, and *React children* lessons.

## Goal

By the end of the lesson, you should be able to:

* Use props to pass data between a parent component and its child
* Use props to pass data from a child component to its parent
* Use props to pass data between child components of the same parent (siblings)

## Setup

Clone this repo and install dependencies with yarn or npm

## Part 1: Parent to child

Props are ways to pass objects between a parent component its child.

### Exercise

Put an `active` prop on `<Child />` so that when the *Activate!* button is pressed
on `<Parent />`, both components show "Parent" as the value for active.

## Part 2: Child to parent

Remeber, everything in Javascript is an object, including functions! So we can
use props to pass functions between a parent component and its child.

The function passed can update the parent state with a value specified by the
child, effectively letting us pass data from the child back to its parent.

### Exercise

Put an `onSetActive` prop on `<Child />` so that when the *Activate!* button
is pressed on `<Child />`, both components show "Child" as the value for active.

## Syntax

One or many props can be set when rendering any React component using the
HTML tag attribute syntax:
```
<Component prop1={'hello'} prop2={'dave'} />
```

Prop values can be any Javascript object, including numbers, strings, arrays
and functions.

React turns these *key/value pairs* (`prop1={'hello'} prop2={'dave'}`) into an
*object*: `{ prop1: 'hello', prop2: 'dave' }`

The syntax for accessing the props object in a React component depends on
whether the component is a functional component (like `<Child />` and `<Sibling />`)
or a class component (like `<Parent />`):

* For functional components, the props object is passed to the component as an
  argument:
  ```
  function Child(props) {
    // will render 'hello'
    return props.prop1
  }
  ```

* For class components, the props object is accessible as a property of the `this`
  object:
  ```
  class Parent extends React.Component {
    render() {
      // will render 'hello'
      return this.props.prop1
    }
  }
  ```

## Part 3

We can use props to pass data between sibling components by combining
parent => child passing with child => parent passing.

### Exercise

Add code to `<Parent />` and `<Sibling />` so that all three components show the
same value for Active when the buttons are pressed.
