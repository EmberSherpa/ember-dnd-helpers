# ember-dnd-helpers

+[![Build Status](https://travis-ci.org/EmberSherpa/ember-dnd-helpers.svg)](https://travis-ci.org/EmberSherpa/ember-dnd-helpers)
+[![npm version](https://badge.fury.io/js/ember-dnd-helpers.svg)](http://badge.fury.io/js/ember-dnd-helpers)
+[![Dependency Status](https://david-dm.org/EmberSherpa/ember-dnd-helpers.svg)](https://david-dm.org/EmberSherpa/ember-dnd-helpers)

## `(drag-set 'plain/text' 'some text')`

Use in `ondragstart` event handler to set data on the event. `(drag-set 'plain/text' 'some text')` is equivalent to calling `event.dataTrasfer.setData('plain/text')` in the event handler.

```
<div draggable="true" ondragstart={{action (drag-set 'plain/text' 'some text')}}></div>
```

This helper can accept `application/json` mime type in which case it will `JSON.stringify` the received data.

```
<div draggable="true" ondragstart={{action (drag-set "application/json" (hash id=123 color='red'))}}></div>
```

## `(drag-get 'plain/text')`

Use in `ondrop` event handler to retrieve data set with `event.dataTransfer.setData`. `(drag-get 'plain/text')` is equivalent to `event.dataTransfer.getData('plain/text')`.

```hbs
<div ondrop={{action (pipe (prevent-default) (drag-get 'plain/text') (action 'dosomething'))}}></div>
```

This helper can accept `application/json` mime type in which case it will `JSON.parse` the received data.

## `(prevent-default)`

Calls `event.preventDefault()`.

## `(stop-propagating)

Calls `event.stopPropagating()`.

## `(drop-effect 'move')`

Applies specified drop effect onto the event. Equivalent to calling `even.dropEvent = move`;

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Credits

Thank you Miguel Camba for suggesting to try doing drag and drop with pure events.