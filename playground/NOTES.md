I built the modal, tabs, and disclosure by hand first.
After that, I installed shadcn/ui and added the generated dialog and tabs components so I could compare them.

What my version does

- My modal is a custom native <dialog> component and it opens and closes from state.
- My tabs use manual tab state and keyboard handling with arrow keys.
- My disclosure uses a button and aria-expanded to show and hide content.

What shadcn handled that I missed

1. Shadcn uses a reusable Button component for the dialog close button. My version has a plain button, but shadcn has a shared primitive that can be used in many places.
2. Shadcn’s tabs version uses react-aria-components and a more complete render-prop className system. My tabs work, but shadcn has a more polished component structure and better built-in accessibility behavior.

What I learned

- My hand-built components work and the build passes, but shadcn provides a more robust foundation.
- The important part is that I built my own versions first and then used shadcn to learn what else is possible.
