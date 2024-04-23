# Custom Modal using Next.js, Tailwind CSS, TypeScript, React Transition Group

This project is a custom modal window created using Next.js, Tailwind CSS, TypeScript, and React Transition Group. It also uses `class-variance-authority` to pass settings to the modal window.

## Main Features

- **Variant and Size**: You can pass the `variant` and `size` component to the modal window.
- **CloseTimeOut**: You can pass the `closeTimeOut` field. For example, if you want to make an advertising modal window and pass `closeTimeOut: 5`, then for 5 seconds you will not be able to close the modal window, like in advertising.

## How to call the modal window

You can call the modal window using the `handleModal` function from `ModalContext`. Here is an example:

```jsx
const { handleModal } = useContext(ModalContext);

return (
    <button onClick={() =>
        handleModal({
            children: <DefaultModal />,
            variant: "default",
            size: "sm",
        })
    }>
        Open Default Modal Window
    </button>
);
