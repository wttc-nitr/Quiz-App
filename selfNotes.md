## flexbox
- `flex-grow`, `flex-shrink` and `flex-basis` -> related to resizing elements in the available free space.

### order of operation:
1. `flex-basis`: sets the initial size before growing/shrinking
    - `flex-basis: 0` => sets the initial size to 0px
    - `flex-basis: 1` => sets the initial size to 1px
    - `flex-basis: 200px` => sets the initial size to 200px (overriding the original size)
    - `flex-basis: auto` => sets the initial size to original size.

2. `flex-shrink` or `flex-grow` takes place as per available free space in the container.

##
- `Pressable` -> similar to `View` with button-press feature.

## implementing custom-button: challanges
- for adding an extra feature, we've to write **(everytime) at three places**:
    1. type definition
    2. destructuring
    3. actual usage in the component.

- if we extend the `Pressable`, we don't have to do all these:
```typescript
type CustomButton = {
  // others
} & ComponentProps<typeof Pressable>;

function CustomButton ({...pressableProps}: CustomButton) {
  return (
    <Pressable
      {...pressableProps}
      {/* others */}
    />
  )
}
````

- `ComponentProps<typeof Component>` -> to get props of a component
