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

function CustomButton ({others, ...pressableProps}: CustomButton) {
  return (
    <Pressable
      {...pressableProps}
      {/* others */}
    />
  )
}
````

- `ComponentProps<typeof Component>` -> to get props of a component

# Context
- we use `value={{}}` prop in `React.Context.Provider` because we want to send context data in one value:
```typescript
❌ <QuizContext.Provider>  // Missing value prop
❌ <QuizContext.Provider questionIndex onNext>  // Multiple props
```
- if you want to isolate context data, just create different contexts.

- `useQuizContext` custom hook to give access to context data (define in Provider wrapper component)
- this way u don't have to import `useContext` & the context -> a single import will do the job.
```typescript
export const useQuizContext = () => useContext(QuizContext);
```

- keep the logic (related to the data) near to the data. So, components become responsible for displaying the UI only.

#
- TypeScript allows fewer parameters than declared in the function type (but not more).
```typescript
type Setter = (newOption: string) => void;

const setter1: Setter = () => {}; // No error!

const setter2: Setter = (newOption) => console.log(newOption); // correct implementation

const setter3: Setter = (newOption, b) => {} // error
```
# useEffect
```javascript
useEffect(() => {
  //setup function

  return () => {
    // cleanup function
  }
}, [deps])
```
- when useEffect comes into action:
    - when component mounts, setup function runs
    - then, if deps change, first cleanup function (if provided) runs (with old values), then setup function with new values.
    - on unmount, cleanup function runs
